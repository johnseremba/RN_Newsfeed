import React, { Component } from 'react';
import {Container, Content} from "native-base";
import MainStoryCard from "./MainStoryCard";

export default class SportsNews extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <MainStoryCard />
                </Content>
            </Container>
        );
    }
}