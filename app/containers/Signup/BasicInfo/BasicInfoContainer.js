import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { BasicInfo } from 'components'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

const BasicInfoContainer = React.createClass({
  propTypes: {
    updateUser: PropTypes.func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  navNext: function () {
    this.context.router.replace('body-weight')
  },
  render: function () {
    return (
      <BasicInfo navNext={this.navNext}
        />
    )
  },
})

function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    email: users.getIn([id, 'info', 'email']),
    name: users.getIn([id, 'info', 'name']),
    dateOfBirth: users.getIn([id, 'info', 'dateOfBirth']),
    editableEmail: PropTypes.string.isRequired,
    editableName: PropTypes.string.isRequired,
    editableDateOfBirth: PropTypes.string.isRequired,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInfoContainer)


