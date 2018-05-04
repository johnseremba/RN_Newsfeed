import React, { Component } from "react";
import {Card, CardItem, Text, View} from "native-base";
import {Image, ImageBackground, StyleSheet, TouchableHighlight} from "react-native";
import {ANIMATIONS_SLIDE, CustomTabs} from "react-native-custom-tabs";

export default class MainStoryCard extends Component {

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
        const title = "Messi takes on Ronaldo";
        const desc = `${'Sed ut perspiciatis unde omnis isle natus error sit voluptatem accusantiu doloremque laudantium, totam'}`;
        return (
            <Card>
                <TouchableHighlight onPress={() => this.openArticleUrl()}>
                    <CardItem cardBody>
                        <ImageBackground
                            imageStyle={{resizeMode: 'cover'}}
                            style={styles.bgImage}
                            source={require('../img/bg.png')}>
                            <View style={styles.container}>
                                <View style={styles.contentBg}>
                                    <Text style={styles.header}>
                                        {title}
                                    </Text>
                                    <Text note numberOfLines={2} style={{color: '#ffffff'}}>
                                        {desc}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </CardItem>
                </TouchableHighlight>
            </Card>
        );
    }
}

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
