import React, { Component } from 'react';
import {Container, Content} from "native-base";
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
            </Container>
        );
    }
}