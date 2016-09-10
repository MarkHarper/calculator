import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { BodyWeight } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'

const BodyWeightContainer = React.createClass({
  propTypes: {
    user: PropTypes.object.isRequired,
    updateSignupText: PropTypes.func.isRequired,
    saveGoalForSignup: PropTypes.func.isRequired,
    updateGoalForSignup: PropTypes.func.isRequired,
    editableCurrentWeight: PropTypes.string.isRequired,
    editableTargetWeight: PropTypes.string.isRequired,
    currentWeight: PropTypes.string.isRequired,
    targetWeight: PropTypes.string.isRequired,
    currentBodyFat: PropTypes.string.isRequired,
    targetBodyFat: PropTypes.string.isRequired,
    exerciseTime: PropTypes.string.isRequired,
    exerciseIntensity: PropTypes.string.isRequired,
    fatPreference: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('/signup/body-fat')
  },
  render: function () {
    return (
      <BodyWeight user={this.props.user}
        navNext={this.navNext}
        updateGoalForSignup={this.props.updateGoalForSignup}
        saveGoalForSignup={this.props.saveGoalForSignup}
        updateSignupText={this.props.updateSignupText}
        editableCurrentWeight={this.props.editableCurrentWeight}
        editableTargetWeight={this.props.editableTargetWeight}
        currentWeight={this.props.currentWeight}
        targetWeight={this.props.targetWeight}
        currentBodyFat={this.props.currentBodyFat}
        targetBodyFat={this.props.targetBodyFat}
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
    editableCurrentWeight: signup.get('editableCurrentWeight'),
    editableTargetWeight: signup.get('editableTargetWeight'),
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
)(BodyWeightContainer)


