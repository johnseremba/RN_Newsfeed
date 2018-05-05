import React from 'react';
import PropTypes from "prop-types";
import {Container, Content, Text} from "native-base";
import NewsCard from "./NewsCard";

const GlobalNews = ({ sources, data }) => (
    <Container>
        <Content padder>
            <NewsCard/>
            <NewsCard/>
        </Content>
    </Container>
);

GlobalNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array
};

export default GlobalNews;
