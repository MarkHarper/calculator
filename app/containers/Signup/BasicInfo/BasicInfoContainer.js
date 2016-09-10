import { bindActionCreators } from 'redux'
import { BasicInfo } from 'components'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInfo)
