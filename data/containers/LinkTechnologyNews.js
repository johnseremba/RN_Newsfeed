import { connect } from "react-redux";
import TechnologyNews from "../../components/TechnologyNews";

const mapStateToProps = state => {
    return {
        sources: state.technology.sources,
        articles: state.technology.articles,
        isFetching: state.technology.flags.isFetching,
        errMsg: state.technology.flags.errMsg,
        receivedAt: state.technology.flags.receivedAt
    };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const LinkTechnologyNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TechnologyNews);

export default LinkTechnologyNews;
