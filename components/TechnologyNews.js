import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from "native-base";
import NewsCard from "./NewsCard";

const TechnologyNews = ({sources, data}) => (
    <Container>
        <Content padder>
            <NewsCard/>
            <NewsCard/>
        </Content>
    </Container>
);

TechnologyNews.propTypes = {
    sources: PropTypes.array,
    data: PropTypes.array
};

export default TechnologyNews;
