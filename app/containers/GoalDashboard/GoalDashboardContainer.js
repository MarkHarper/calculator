import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { GoalDashboard } from 'components'
import { connect } from 'react-redux'
import * as goalActionCreators from 'redux/modules/goals'

const GoalDashboardContainer = React.createClass({
  propTypes: {
    currentWeight: PropTypes.string.isRequired,
    currentBodyFat: PropTypes.string.isRequired,
    targetWeight: PropTypes.string.isRequired,
    targetBodyFat: PropTypes.string.isRequired,
    exerciseTime: PropTypes.string.isRequired,
    exerciseIntensity: PropTypes.string.isRequired,
    fatPreference: PropTypes.string.isRequired,
    isFetchingGoal: PropTypes.bool.isRequired,
    height: PropTypes.string.isRequired,
    fetchAndHandleUsersGoals: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  },
  componentDidMount: function () {
    this.props.fetchAndHandleUsersGoals(this.props.user.get('uid'))
  },
  render: function () {
    return (
      <GoalDashboard currentWeight={this.props.currentWeight}
        currentBodyFat={this.props.currentBodyFat}
        targetWeight={this.props.targetWeight}
        targetBodyFat={this.props.targetBodyFat}
        exerciseTime={this.props.exerciseTime}
        exerciseIntensity={this.props.exerciseIntensity}
        fatPreference={this.props.fatPreference}
        isFetchingGoal={this.props.isFetchingGoal}
        height={this.props.height} />
    )
  },
})

function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    height: users.getIn([id, 'info', 'height']),
    currentWeight: users.getIn([id, 'goal', 'currentWeight']),
    currentBodyFat: users.getIn([id, 'goal', 'currentBodyFat']),
    targetWeight: users.getIn([id, 'goal', 'targetWeight']),
    targetBodyFat: users.getIn([id, 'goal', 'targetBodyFat']),
    exerciseTime: users.getIn([id, 'goal', 'exerciseTime']),
    exerciseIntensity: users.getIn([id, 'goal', 'exerciseIntensity']),
    fatPreference: users.getIn([id, 'goal', 'fatPreference']),
    isFetchingGoal: users.get('isFetchingGoal'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(goalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDashboardContainer)
