
import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetchingUser: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        if (this.props.signUpComplete === true) {
          this.context.router.replace('results')
        } else if (this.props.signUpComplete === false) {
          this.context.router.replace('signup/basic-info')
        }
      })
  },
  render () {
    return (
      <Authenticate
        isFetchingUser={this.props.isFetchingUser}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps ({users}) {
  return {
    isFetchingUser: users.get('isFetchingUser'),
    signUpComplete: users.get('signUpComplete'),
    error: users.get('error'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)