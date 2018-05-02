import React, { Component } from "react";
import {Body, Button, Container, Content, Header, Icon, Left, Right, Tab, Text, Title} from "native-base";
import {Tabs} from "native-base/src/index";

export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'Newsfeed',
        headerLeft: null,
        header: (
            <Header hasTabs>
                <Left>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Newsfeed</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="ios-search" />
                    </Button>
                    <Button transparent>
                        <Icon name='md-more' />
                    </Button>
                </Right>
            </Header>
        )
    };

    render() {
        return (
            <Container>
                <Tabs initialPage={0}>
                    <Tab heading='Global News'>
                        <Text>Some Global news</Text>
                    </Tab>
                    <Tab heading='Sports News'>
                        <Text>Sports News</Text>
                    </Tab>
                    <Tab heading='Technology'>
                        <Text>Tech News</Text>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
