import { connect } from 'react-redux';
import { searchTransfer } from '../actions/transferActions';
import Transfers from '../components/profile/transfers';

const mapStateToProps = (state: any) => {
  return {
    user: state.loggedIn,
    transfers: state.transfers
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchTransfer: (params: any) => dispatch(searchTransfer(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);