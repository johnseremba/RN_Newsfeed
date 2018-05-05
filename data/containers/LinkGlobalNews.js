import { connect } from "react-redux";
import GlobalNews from "../../components/GlobalNews";

const mapStateToProps = state => {
    return {
        sources: state.global.sources,
        articles: state.global.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const LinkGlobalNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GlobalNews);

export default LinkGlobalNews;
