import React from 'react';
import { Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail, ActionSheet, Toast, View } from 'native-base';
import { Image, Platform, TouchableHighlight } from 'react-native';
import { CustomTabs, ANIMATIONS_SLIDE } from "react-native-custom-tabs";
import { getIcon, timeSince } from "../data/services/helperFunctions";

const NewsCard = ({ article }) => {

    showActionSheet = (source) => {
        const BUTTONS = [
            { text: 'Hide story', icon: 'md-eye-off' },
            { text: `Not interested in ${source}`, icon: 'md-remove-circle'},
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
    };

    openArticleUrl = (url) => {
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
           <CardItem header>
               <Left>
                   <Thumbnail source={sourceIcon} />
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
           <TouchableHighlight onPress ={() => this.openArticleUrl(url)}>
               <View>
                   <CardItem cardBody>
                       <Image
                           source={{uri: urlToImage}}
                           style={{height: 200, width: null, flex: 1, resizeMode: "cover"}} />
                   </CardItem>
                   <CardItem>
                       <Body>
                           <Text numberOfLines={1}>{title}</Text>
                           <Text note numberOfLines={3}>{body}</Text>
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
};

export default NewsCard;