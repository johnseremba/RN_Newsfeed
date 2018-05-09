import React, { Component } from "react";
import { Button, Container, Icon } from "native-base";
import { Platform, ImageBackground, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../resources/colors";
import firebase from "react-native-firebase";
import {receiveUserData, requestUserData} from "../data/actions/actions";
import {authTypes} from "../data/constants";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.googleLogin = this.googleLogin.bind(this);
        this.facebookLogin = this.facebookLogin.bind(this);
        this.anonymousLogin = this.anonymousLogin.bind(this);
    }

    static navigationOptions = {
        title: 'Login',
        header: false
    };

    googleLogin() {
        return this.props.navigation.navigate('Dashboard');
    }

    facebookLogin() {
        return this.props.navigation.navigate('Dashboard');
    }

    anonymousLogin() {
        const { dispatch } = this.props;
        dispatch(requestUserData(authTypes.ANONYMOUS));

        firebase.auth()
            .signInAnonymouslyAndRetrieveData()
            .then(userData => {
                if (userData) {
                    dispatch(receiveUserData(userData));
                }
            });

        return this.props.navigation.navigate('Dashboard');
    }

    componentDidMount() {
        if(firebase.auth().currentUser) {
            this.props.navigation.navigate('Dashboard');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const heading = 'NEWS FEED';
        const subHeading = 'Stay informed';
        const facebookLabel = 'Login with Facebook';
        const googleLabel = 'Login with Google';
        const anonymousLable = "Be Anonymous";
        const copyright = '(c) Serions Systems 2018';

        return (
            <Container>
                <LinearGradient style={{flex: 1}} colors={['#13B0FF', '#096A9A', '#002D44']}>
                    <ImageBackground
                        source={require('../img/bg.png')}
                        imageStyle={styles.bgImage}
                        style={styles.backgroundImage}>
                        <View style={styles.container}>

                            <Text style={[styles.heading, styles.textColor]}>
                                {heading}
                            </Text>

                            <Text style={[styles.subheading, styles.textColor]}>
                                {subHeading}
                            </Text>

                            <Button full rounded
                                    style={{marginTop: 50, backgroundColor: '#3b5998'}}
                                    onPress={() => this.facebookLogin()}
                            >
                                <Icon name='logo-facebook'/>
                                <Text style={styles.textColor}>
                                    {facebookLabel}
                                </Text>
                            </Button>

                            <Button full rounded
                                    style={{marginTop: 20, backgroundColor: '#dd4b39'}}
                                    onPress={() => this.googleLogin()}
                            >
                                <Icon name='logo-googleplus'/>
                                <Text style={styles.textColor}>
                                    {googleLabel}
                                </Text>
                            </Button>

                            <Button full rounded
                                    style={{marginTop: 20, backgroundColor: colors.colorPrimary}}
                                    onPress={() => this.anonymousLogin()}
                                >
                                <Text style={styles.textColor}>
                                    {anonymousLable}
                                </Text>
                                <Icon name='ios-arrow-forward' style={{color: colors.colorPrimaryLight}} />
                            </Button>

                        </View>
                        <Text style={[styles.footer, styles.textColor]}>
                            {copyright}
                        </Text>
                    </ImageBackground>
                </LinearGradient>
            </Container>
        );
    }
}

styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },
    bgImage: {
        resizeMode: 'cover',
        opacity: 0.6
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
    },
    footer: {
        justifyContent: 'flex-end',
        bottom: 10,
        fontSize: 15
    },
    heading: {
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        fontSize: 40,
        textAlign: 'center'
    },
    textColor: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    subheading: {
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Thin' : 'sans-serif-light',
        textAlign: 'center',
        fontSize: 15
    }
});
