import { connect } from 'react-redux';
import SideBar from "../../components/SideBar";

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        name: state.user.userObj.name,
        email: state.user.userObj.email,
        pictureUrl: state.user.userObj.pictureUrl
    };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const LinkSideBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);

export default LinkSideBar;
