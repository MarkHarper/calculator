import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { firebaseAuth } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
import { fetchUser } from 'helpers/api'
import { container, innerContainer } from './styles.css'
import * as userActionCreators from 'redux/modules/users'

function isGoalReal (users) {
  if (users.get('isAuthed')) {
    const id = users.get('authedId')
    const user = users.get(id)
    if (user && user.get('goal') && user.getIn(['goal', 'targetWeight']).length !== 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    isFetchingUser: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    hasGoal: PropTypes.bool.isRequired,
    signUpComplete: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.props.authUser(user.uid)
        fetchUser(user.uid)
          .then((user) => {
            const userInfo = formatUserInfo(user.info.name, user.info.avatar, user.info.uid,
              user.info.preferredName, user.info.email, user.info.height)
            this.props.fetchingUserSuccess(user.info.uid, userInfo, Date.now())
            if (this.props.location.pathname === '/' && this.props.signUpComplete === true) {
              this.context.router.replace('results')
            } else if (this.props.location.pathname === '/' && this.props.signUpComplete === false) {
              let goal = user.goal
              if (!userInfo.preferredName || !userInfo.email || !userInfo.height) {
                this.context.router.replace('signup/basic-info')
              } else if (!goal.currentWeight || !goal.targetWeight) {
                this.context.router.replace('signup/body-weight')
              } else if (!goal.exerciseTime || !goal.exerciseIntensity) {
                this.context.router.replace('signup/exercise-info')
              } else if (!goal.fatPreference) {
                this.context.router.replace('signup/diet-preferences')
              } else {
                
                this.context.router.replace('results')
              }
            }
          })
      } else {
        this.props.removeFetchingUser()
      }
    })
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
  },
  
  render () {
    return this.props.isFetchingUser === true
      ? null
      : <div className={container}>
          <Navigation hasGoal={this.props.hasGoal} isAuthed={this.props.isAuthed}
            auth={this.handleAuth} isSignUp={this.props.location.pathname === '/auth'}/>
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  },
})

export default connect(
  ({users}) => ({hasGoal: isGoalReal(users), isAuthed: users.get('isAuthed'), 
    isFetchingUser: users.get('isFetchingUser'), signUpComplete: users.get('signUpComplete')}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(MainContainer)
