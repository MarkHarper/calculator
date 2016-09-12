import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { firebaseAuth } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
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
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if (this.props.location.pathname === '/' && this.props.signUpComplete === true) {
          this.context.router.replace('results')
        }
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
