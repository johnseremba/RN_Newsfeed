import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Container, Content, Text } from "native-base";
import NewsCard from "./NewsCard";
import { fetchNewsIfNeeded, requestNewsCategory } from "../data/actions/actions";

export default class GlobalNews extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchNewsIfNeeded(requestNewsCategory.REQUEST_GLOBAL_NEWS, this.props.sources));
    };

    render() {
        return (
            <Container>
                <Content padder>
                    {this.props.articles.map(article => <NewsCard key={article.url} article={article}/>)}
                </Content>
            </Container>
        );
    }
}

GlobalNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};
