import React, { Component } from 'react';
import {Card, CardItem, Text, View} from "native-base";
import {Image, StyleSheet, TouchableHighlight} from "react-native";
import {ANIMATIONS_SLIDE, CustomTabs} from "react-native-custom-tabs";
import {colors} from "../resources/colors";
import {getIcon, timeSince} from "../data/services/helperFunctions";

const SmallNewsCard = ({ article }) => {

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
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={{fontSize: 18}}>
                                {title}
                            </Text>
                            <Text numberOfLines={3} note style={{marginTop: 10}}>
                                {body}
                            </Text>
                            <View style={styles.sourceContainer}>
                                <Text note style={styles.title}>
                                    {source}
                                </Text>
                                <Text note style={{marginLeft: 10}}>
                                    {publishedDate}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.newsThumb} source={{uri: urlToImage}}/>
                        </View>
                    </View>
                </CardItem>
            </TouchableHighlight>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 130
    },
    textContainer: {
        flex: 1,
        padding: 10
    },
    sourceContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
    title: {
        fontWeight: 'bold',
        maxWidth: 150,
        color: colors.colorPrimaryDark
    },
    imageContainer: {
        alignItems: 'flex-end',
        width: 130
    },
    newsThumb: {
        flex: 1,
        width: 130,
        height: null,
        resizeMode: 'cover'
    }
});

export default SmallNewsCard;
