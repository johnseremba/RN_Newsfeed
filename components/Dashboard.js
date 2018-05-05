import React, { Component } from "react";
import {Body, Button, Container, Header, Icon, Left, Right, Tab, Text, Title} from "native-base";
import {Tabs} from "native-base/src/index";
import LinkGlobalNews from "../data/containers/LinkGlobalNews";
import LinkSportsNews from "../data/containers/LinkSportsNews";
import LinkTechnologyNews from "../data/containers/LinkTechnologyNews";

export default class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params;
        return {
            title: 'Newsfeed',
            headerLeft: null,
            header: (
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => params.openDrawer()}
                        >
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Newsfeed</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-search"/>
                        </Button>
                        <Button transparent>
                            <Icon name='md-more'/>
                        </Button>
                    </Right>
                </Header>
            )
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ openDrawer: () => this.props.screenProps() })
    }

    render() {
        return (
            <Container>
                <Tabs initialPage={0}>
                    <Tab heading='Global News'>
                        <LinkGlobalNews />
                    </Tab>
                    <Tab heading='Sports News'>
                        <LinkSportsNews />
                    </Tab>
                    <Tab heading='Technology'>
                        <LinkTechnologyNews />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
