import { connect } from "react-redux";
import GlobalNews from "../../components/GlobalNews";

const mapStateToProps = state => {
    return {
        sources: state.global.sources,
        articles: state.global.articles,
        isFetching: state.global.flags.isFetching,
        errMsg: state.global.flags.errMsg,
        receivedAt: state.global.flags.receivedAt
    };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const LinkGlobalNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GlobalNews);

export default LinkGlobalNews;
