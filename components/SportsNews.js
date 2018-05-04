import React, { Component } from 'react';
import {Button, Container, Content, Footer, FooterTab, Icon, Text} from "native-base";
import MainStoryCard from "./MainStoryCard";
import SmallNewsCard from "./SmallNewsCard";

export default class SportsNews extends Component {
    render() {
        return(
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
    }
}