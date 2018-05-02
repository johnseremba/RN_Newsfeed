import React, { Component } from "react";
import {Container, Content, Footer, Text} from "native-base";

export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        Dashboard
                    </Text>
                </Content>
            </Container>
        );
    }
}
