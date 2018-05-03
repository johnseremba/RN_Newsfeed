import React, { Component } from 'react';
import {Body, Button, Card, CardItem, Container, Content, Icon, Left, Right, Text, Thumbnail} from "native-base";
import {Image} from "react-native";

export default class NewsCard extends Component {
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
                       <Button transparent>
                           <Icon name="md-more" />
                       </Button>
                   </Right>
               </CardItem>
               <CardItem cardBody>
                   <Image
                       source={require('../img/bg.png')}
                       style={{height: 200, width: null, flex: 1, resizeMode: 'cover'}} />
               </CardItem>
               <CardItem>
                   <Body>
                       <Text>{title}</Text>
                       <Text note>{body}</Text>
                   </Body>
               </CardItem>
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