import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { BodyFat } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'

const BodyFatContainer = React.createClass({
  propTypes: {
    user: PropTypes.object.isRequired,
    updateSignupText: PropTypes.func.isRequired,
    saveGoalForSignup: PropTypes.func.isRequired,
    updateGoalForSignup: PropTypes.func.isRequired,
    currentWeight: PropTypes.string.isRequired,
    targetWeight: PropTypes.string.isRequired,
    currentBodyFat: PropTypes.string.isRequired,
    targetBodyFat: PropTypes.string.isRequired,
    editableCurrentBodyFat: PropTypes.string.isRequired,
    editableTargetBodyFat: PropTypes.string.isRequired,
    exerciseTime: PropTypes.string.isRequired,
    exerciseIntensity: PropTypes.string.isRequired,
    fatPreference: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('/signup/exercise-info')
  },
  render: function () {
    return (
      <BodyFat user={this.props.user}
        navNext={this.navNext}
        updateGoalForSignup={this.props.updateGoalForSignup}
        saveGoalForSignup={this.props.saveGoalForSignup}
        updateSignupText={this.props.updateSignupText}
        currentWeight={this.props.currentWeight}
        targetWeight={this.props.targetWeight}
        currentBodyFat={this.props.currentBodyFat}
        targetBodyFat={this.props.targetBodyFat}
        editableCurrentBodyFat={this.props.editableCurrentBodyFat}
        editableTargetBodyFat={this.props.editableTargetBodyFat}
        exerciseTime={this.props.exerciseTime}
        exerciseIntensity={this.props.exerciseIntensity}
        fatPreference={this.props.fatPreference}/>
    )
  },
})

function mapStateToProps ({signup, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    editableCurrentBodyFat: signup.get('editableCurrentBodyFat'),
    editableTargetBodyFat: signup.get('editableTargetBodyFat'),
    currentWeight: users.getIn([id, 'goal', 'currentWeight']),
    targetWeight: users.getIn([id, 'goal', 'targetWeight']),
    currentBodyFat: users.getIn([id, 'goal', 'currentBodyFat']),
    targetBodyFat: users.getIn([id, 'goal', 'targetBodyFat']),
    exerciseTime: users.getIn([id, 'goal', 'exerciseTime']),
    exerciseIntensity: users.getIn([id, 'goal', 'exerciseIntensity']),
    fatPreference: users.getIn([id, 'goal', 'fatPreference']),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(signupActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BodyFatContainer)


