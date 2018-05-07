import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from "native-base";
import NewsCard from "./NewsCard";
import {requestNewsCategory} from "../data/actions/actionConstants";
import {fetchNewsIfNeeded} from "../data/actions/actions";
import MainStoryCard from "./MainStoryCard";

export default class TechnologyNews extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchNewsIfNeeded(requestNewsCategory.REQUEST_TECHNOLOGY_NEWS, this.props.sources));
    };

    render() {
        return (
            <Container>
                <Content padder>
                    {this.props.articles.map((article, index) => {
                        if((index % 3) === 0) {
                            return <MainStoryCard key={index} article={article}/>;
                        } else {
                            return (<NewsCard key={index} article={article}/>);
                        }
                    })}
                </Content>
            </Container>
        );
    }
}

TechnologyNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array
};
