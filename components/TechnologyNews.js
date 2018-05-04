import React, { Component } from 'react';
import {Container, Content} from "native-base";
import NewsCard from "./NewsCard";

export default class TechnologyNews extends Component{
    render() {
        return (
            <Container>
                <Content padder>
                    <NewsCard/>
                    <NewsCard/>
                </Content>
            </Container>
        );
    }
}
