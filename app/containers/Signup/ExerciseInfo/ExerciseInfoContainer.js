import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { ExerciseInfo } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'

const ExerciseInfoContainer = React.createClass({
  propTypes: {
    user: PropTypes.object.isRequired,
    updateSignupText: PropTypes.func.isRequired,
    saveGoalForSignup: PropTypes.func.isRequired,
    updateGoalForSignup: PropTypes.func.isRequired,
    currentWeight: PropTypes.string.isRequired,
    targetWeight: PropTypes.string.isRequired,
    currentBodyFat: PropTypes.string,
    targetBodyFat: PropTypes.string,
    exerciseTime: PropTypes.string.isRequired,
    exerciseIntensity: PropTypes.string.isRequired,
    editableExerciseTime: PropTypes.string.isRequired,
    editableExerciseIntensity: PropTypes.string.isRequired,
    fatPreference: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('/signup/diet-preferences')
  },
  render: function () {
    return (
      <ExerciseInfo user={this.props.user}
        navNext={this.navNext}
        updateGoalForSignup={this.props.updateGoalForSignup}
        saveGoalForSignup={this.props.saveGoalForSignup}
        updateSignupText={this.props.updateSignupText}
        currentWeight={this.props.currentWeight}
        targetWeight={this.props.targetWeight}
        currentBodyFat={this.props.currentBodyFat}
        targetBodyFat={this.props.targetBodyFat}
        exerciseTime={this.props.exerciseTime}
        exerciseIntensity={this.props.exerciseIntensity}
        editableExerciseTime={this.props.editableExerciseTime}
        editableExerciseIntensity={this.props.editableExerciseIntensity}
        fatPreference={this.props.fatPreference}/>
    )
  },
})

function mapStateToProps ({signup, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    editableExerciseTime: signup.get('editableExerciseTime'),
    editableExerciseIntensity: signup.get('editableExerciseIntensity'),
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
)(ExerciseInfoContainer)


