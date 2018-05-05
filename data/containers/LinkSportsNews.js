import { connect } from "react-redux";
import SportsNews from "../../components/SportsNews";

const mapStateToProps = state => {
    return {
        sources: state.sports.sources,
        articles: state.sports.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const LinkSportsNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SportsNews);

export default LinkSportsNews;
