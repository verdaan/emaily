import { connect } from 'react-redux';
import { HeaderComponent } from './header';
import { paymentsActions } from '../../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export const Header = connect(mapStateToProps, paymentsActions)(HeaderComponent);