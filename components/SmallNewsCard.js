import React, { Component } from 'react';
import {Card, CardItem, Text, View} from "native-base";
import {Image, StyleSheet, TouchableHighlight} from "react-native";
import {ANIMATIONS_SLIDE, CustomTabs} from "react-native-custom-tabs";

export default class SmallNewsCard extends Component {

    openArticleUrl(url = "https://www.google.com") {
        CustomTabs.openURL(url, {
            toolbarColor: '#607D8B',
            enableUrlBarHiding: true,
            showPageTitle: true,
            enableDefaultShare: true,
            animations: ANIMATIONS_SLIDE
        });
    }

    render() {
        const title = 'Ronaldo takes on Messi';
        const desc = `${'Sed ut perspiciatis unde omnis isle natus error sit voluptatem accusantiu doloremque laudanti'}`;
        const newsSource = 'News Source';
        const publishedAt = '20 mins ago';

        return (
            <Card>
                <TouchableHighlight onPress={() => this.openArticleUrl()}>
                    <CardItem cardBody>
                        <View style={styles.container}>
                            <View style={styles.textContainer}>
                                <Text numberOfLines={1} style={{fontSize: 18}}>
                                    {title}
                                </Text>
                                <Text numberOfLines={3} note style={{marginTop: 10}}>
                                    {desc}
                                </Text>
                                <View style={styles.sourceContainer}>
                                    <Text note style={styles.title}>
                                        {newsSource}
                                    </Text>
                                    <Text note style={{marginLeft: 10}}>
                                        {publishedAt}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.newsThumb} source={require('../img/bg.png')}/>
                            </View>
                        </View>
                    </CardItem>
                </TouchableHighlight>
            </Card>
        );
    }
}

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
        maxWidth: 150
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
