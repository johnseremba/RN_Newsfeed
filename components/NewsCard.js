import React, { Component } from 'react';
import {Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail, ActionSheet, Toast, View} from 'native-base';
import {Image, Platform, TouchableHighlight} from 'react-native';
import {CustomTabs, ANIMATIONS_SLIDE} from "react-native-custom-tabs";

export default class NewsCard extends Component {

    showActionSheet(source = 'BBC News') {
        const BUTTONS = [
            { text: 'Hide story', icon: 'md-eye-off' },
            { text: `Not interested in ${source}`, icon: 'md-notifications-off'},
            { text: 'Report story', icon: 'md-alert' },
            { text: 'Cancel', icon: 'md-close' }
        ];
        ActionSheet.show({
            options: BUTTONS,
            cancelButtonIndex: 3,
            title: 'Select an option'
        }, buttonIndex => {
            Toast.show({
                text: `Clicked: ${BUTTONS[buttonIndex].text}`,
                duration: 3000
            });
        });
    }

    openArticleUrl(url = 'https://www.google.com') {
        CustomTabs.openURL(url, {
            toolbarColor: '#607D8B',
            enableUrlBarHiding: true,
            showPageTitle: true,
            enableDefaultShare: true,
            animations: ANIMATIONS_SLIDE
        });
    }

    render() {
        const source = 'BBC News';
        const author = 'Crystal Bell';
        const publishedDate = '20 hrs ago';
        const title = 'Some really long and big title';
        const body = 'Some long description text';

        return (
           <Card>
               <CardItem header>
                   <Left>
                       <Thumbnail source={require('../img/bbc.png')} />
                       <Body>
                           <Text>{source}</Text>
                           <Text note>{author}</Text>
                           <Text note style={{fontSize: 10}}>{publishedDate}</Text>
                       </Body>
                   </Left>
                   <Right>
                       <Button
                           transparent
                           style={{padding: 20}}
                           onPress={() => this.showActionSheet(source)}>
                           <Icon name={Platform.OS === "ios" ? "ios-more": "md-more"} />
                       </Button>
                   </Right>
               </CardItem>
               <TouchableHighlight onPress ={() => this.openArticleUrl()}>
                   <View>
                       <CardItem cardBody>
                           <Image
                               source={require("../img/bg.png")}
                               style={{height: 200, width: null, flex: 1, resizeMode: "cover"}} />
                       </CardItem>
                       <CardItem>
                           <Body>
                               <Text>{title}</Text>
                               <Text note>{body}</Text>
                           </Body>
                       </CardItem>
                   </View>
               </TouchableHighlight>
               <CardItem cardButtons>
                   <Left>
                       <Button transparent>
                           <Icon name="thumbs-up" />
                       </Button>
                       <Button transparent>
                           <Icon name="thumbs-down" />
                       </Button>
                   </Left>
                   <Right>
                       <Button transparent>
                           <Icon name="md-share" />
                       </Button>
                   </Right>
               </CardItem>
           </Card>
        );
    }
}