import React from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Content, Footer, FooterTab, Icon, Text} from "native-base";
import MainStoryCard from "./MainStoryCard";
import SmallNewsCard from "./SmallNewsCard";

const SportsNews = ({sources, articles}) => (
    <Container>
        <Content>
            <MainStoryCard />
            <SmallNewsCard />
            <SmallNewsCard />
        </Content>
        <Footer>
            <FooterTab>
                <Button vertical>
                    <Icon name='apps' />
                    <Text>All News</Text>
                </Button>
                <Button vertical>
                    <Icon name='md-clipboard' />
                    <Text>Matches</Text>
                </Button>
                <Button vertical>
                    <Icon name='md-football' />
                    <Text>Standings</Text>
                </Button>
            </FooterTab>
        </Footer>
    </Container>
);

SportsNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array
};

export default SportsNews;
