import { connect } from "react-redux";
import SportsNews from "../../components/SportsNews";

const mapStateToProps = state => {
    return {
        sources: state.sports.sources,
        articles: state.sports.articles,
        isFetching: state.sports.flags.isFetching,
        errMsg: state.sports.flags.errMsg,
        receivedAt: state.sports.flags.receivedAt
    };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const LinkSportsNews = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SportsNews);

export default LinkSportsNews;
