import React, { Component } from 'react';
import {
    Body,
    Content, Icon,
    Left,
    List,
    ListItem,
    Text,
    Thumbnail,
    View,
} from "native-base";
import { colors } from "../resources/colors";
import { ImageBackground, StyleSheet } from "react-native";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        const email = this.props.email;
        const pictureUrl = this.props.pictureUrl
            ? { uri: this.props.pictureUrl }
            : require('../img/blank-profile-picture.png') ;

        return(
            <Content style={{backgroundColor: '#ffffff'}}>
                <ImageBackground
                    imageStyle={{resizeMode: 'cover'}}
                    style={styles.coverImage}
                    source={require('../img/sidebar.png')}>

                    <View style={styles.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Thumbnail source={pictureUrl} />
                            <View style={styles.textContainer}>
                                <Text style={[styles.textColor, styles.header]}>
                                    {name}
                                </Text>
                                <Text style={styles.textColor}>
                                    {email}
                                </Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-settings" style={styles.iconColor} />
                        </Left>
                        <Body>
                            <Text>Customize Feed</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="md-bug" style={styles.iconColor} />
                        </Left>
                        <Body>
                            <Text>Report an issue</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="md-create" style={styles.iconColor} />
                        </Left>
                        <Body>
                            <Text>Create story</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="md-add" style={styles.iconColor} />
                        </Left>
                        <Body>
                            <Text>Subscribe to News letter</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="md-log-out" style={styles.iconColor} />
                        </Left>
                        <Body>
                            <Text>Log out</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        );
    }

}

const styles = StyleSheet.create({
    coverImage: {
        height: 180,
        width: null
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: '#ffffff',
        textAlign: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    },
    iconColor: {
        color: colors.colorPrimary
    }
});
