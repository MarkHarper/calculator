import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { BasicInfo } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'

const BasicInfoContainer = React.createClass({
  propTypes: {
    updateSignupText: PropTypes.func.isRequired,
    signupUserInfo: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    editableEmail: PropTypes.string.isRequired,
    editableName: PropTypes.string.isRequired,
    editableDateOfBirth: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('/signup/body-weight')
  },
  render: function () {
    return (
      <BasicInfo navNext={this.navNext}
        user={this.props.user}
        email={this.props.email}
        name={this.props.name}
        dateOfBirth={this.props.dateOfBirth}
        editableEmail={this.props.editableEmail}
        editableName={this.props.editableName}
        editableDateOfBirth={this.props.editableDateOfBirth}
        updateSignupText = {this.props.updateSignupText}
        signupUserInfo = {this.props.signupUserInfo}/>
    )
  },
})

function mapStateToProps ({signup, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    email: users.getIn([id, 'info', 'email']),
    name: users.getIn([id, 'info', 'preferredName']),
    dateOfBirth: users.getIn([id, 'info', 'dateOfBirth']),
    editableEmail: signup.get('editableEmail'),
    editableName: signup.get('editableName'),
    editableDateOfBirth: signup.get('editableDateOfBirth'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(signupActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInfoContainer)


