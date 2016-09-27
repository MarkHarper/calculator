import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { DietPreferences } from 'components'
import { connect } from 'react-redux'
import * as signupActionCreators from 'redux/modules/signup'

const DietPreferencesContainer = React.createClass({
  propTypes: {
    user: PropTypes.object.isRequired,
    updateSignupText: PropTypes.func.isRequired,
    saveGoalForSignup: PropTypes.func.isRequired,
    completeSignup: PropTypes.func.isRequired,
    updateGoalForSignup: PropTypes.func.isRequired,
    currentWeight: PropTypes.string.isRequired,
    targetWeight: PropTypes.string.isRequired,
    currentBodyFat: PropTypes.string,
    targetBodyFat: PropTypes.string,
    exerciseTime: PropTypes.string.isRequired,
    exerciseIntensity: PropTypes.string.isRequired,
    fatPreference: PropTypes.string.isRequired,
    editableFatPreference: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('/results')
  },
  render: function () {
    return (
      <DietPreferences user={this.props.user}
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
        fatPreference={this.props.fatPreference}
        editableFatPreference={this.props.editableFatPreference}
        completeSignup={this.props.completeSignup} />
    )
  },
})

function mapStateToProps ({signup, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    editableFatPreference: signup.get('editableFatPreference'),
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
)(DietPreferencesContainer)


