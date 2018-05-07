import React, { Component } from "react";
import {Card, CardItem, Text, View} from "native-base";
import {Image, ImageBackground, StyleSheet, TouchableHighlight} from "react-native";
import {ANIMATIONS_SLIDE, CustomTabs} from "react-native-custom-tabs";
import {getIcon, timeSince} from "../data/services/helperFunctions";

const MainStoryCard = ({ article }) => {

    const openArticleUrl = (url) => {
        CustomTabs.openURL(url, {
            toolbarColor: '#607D8B',
            enableUrlBarHiding: true,
            showPageTitle: true,
            enableDefaultShare: true,
            animations: ANIMATIONS_SLIDE
        });
    };

    const source = article.source.name;
    const author = article.author;
    const publishedDate = timeSince(article.publishedAt);
    const title = article.title;
    const body = article.description;
    const url = encodeURI(article.url);
    const urlToImage = encodeURI(article.urlToImage);
    const sourceIcon = getIcon(article.source.id);

    return (
        <Card>
            <TouchableHighlight onPress={() => openArticleUrl(url)}>
                <CardItem cardBody>
                    <ImageBackground
                        imageStyle={{resizeMode: 'cover'}}
                        style={styles.bgImage}
                        source={{uri: urlToImage}}>
                        <View style={styles.container}>
                            <View style={styles.contentBg}>
                                <Text style={styles.header} numberOfLines={2}>
                                    {title}
                                </Text>
                                <Text note numberOfLines={2} style={{color: '#ffffff'}}>
                                    {body}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </CardItem>
            </TouchableHighlight>
        </Card>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        height: 250,
        width: null
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    contentBg: {
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 10
    },
    header: {
        color: '#ffffff',
        fontSize: 20
    }
});

export default MainStoryCard;
