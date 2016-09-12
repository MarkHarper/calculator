import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { BasicInfo } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'
import {validateEmail} from 'helpers/utils'

function validateInputs (user) {
  if (user.preferredName.length === 0) {
    return false
  } else if (!user.height) {
    return false
  } else if (!validateEmail(user.email)) {
    return false
  } else {
    return true
  }
}

const BasicInfoContainer = React.createClass({
  propTypes: {
    updateSignupText: PropTypes.func.isRequired,
    signupUserInfo: PropTypes.func.isRequired,
    saveBasicInfo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    // dateOfBirth: PropTypes.string.isRequired,
    editableEmail: PropTypes.string.isRequired,
    editableHeight: PropTypes.string.isRequired,
    editableName: PropTypes.string.isRequired,
    // editableDateOfBirth: PropTypes.string.isRequired,
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
        height={this.props.height}
        editableHeight={this.props.editableHeight}
        editableEmail={this.props.editableEmail}
        editableName={this.props.editableName}
        updateSignupText = {this.props.updateSignupText}
        signupUserInfo = {this.props.signupUserInfo}
        saveBasicInfo={this.props.saveBasicInfo}
        validateInputs={validateInputs}/>
    )
  },
})

function mapStateToProps ({signup, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    email: users.getIn([id, 'info', 'email']),
    name: users.getIn([id, 'info', 'preferredName']),
    height: users.getIn([id, 'info', 'height']),
    editableHeight: signup.get('editableHeight'),
    editableEmail: signup.get('editableEmail'),
    editableName: signup.get('editableName'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(signupActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInfoContainer)


