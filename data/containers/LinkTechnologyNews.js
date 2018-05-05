import { connect } from "react-redux";
import TechnologyNews from "../../components/TechnologyNews";

const mapStateToProps = state => {
    return {
        sources: state.technology.sources,
        articles: state.technology.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const LinkTechnologyNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TechnologyNews);

export default LinkTechnologyNews;
