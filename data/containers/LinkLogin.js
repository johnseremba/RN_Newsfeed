import { connect } from 'react-redux';
import Login from "../../components/Login";

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        userObj: state.user.userObj
    };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const LinkLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LinkLogin;
