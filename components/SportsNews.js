import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Content, Footer, FooterTab, Icon, Text} from "native-base";
import MainStoryCard from "./MainStoryCard";
import SmallNewsCard from "./SmallNewsCard";
import {requestNewsCategory} from "../data/actions/actionConstants";
import {fetchNewsIfNeeded} from "../data/actions/actions";

export default class SportsNews extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchNewsIfNeeded(requestNewsCategory.REQUEST_SPORTS_NEWS, this.props.sources));
    };

    render() {
        return (
            <Container>
                <Content>
                    {this.props.articles.map((article, index) => <MainStoryCard key={index} article={article}/> )}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name='apps'/>
                            <Text>All News</Text>
                        </Button>
                        <Button vertical>
                            <Icon name='md-clipboard'/>
                            <Text>Matches</Text>
                        </Button>
                        <Button vertical>
                            <Icon name='md-football'/>
                            <Text>Standings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

SportsNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array
};

