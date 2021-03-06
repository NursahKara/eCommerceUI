import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.signUpText}>
                        Sign Up
                    </Text>
                </View>
                <View style={styles.textboxes}>


                    <View style={styles.textboxContainer}>
                        <TextInput
                            placeholder="Name"
                            style={styles.textInput}
                            onChangeText={value =>
                                this.setState({ name: value })
                            }
                        />
                    </View>
                    <View style={styles.textboxContainer}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            onChangeText={value =>
                                this.setState({ email: value })
                            }
                        />
                    </View>
                    <View style={styles.textboxContainer}>
                        <TextInput
                            placeholder="Password"
                            style={styles.textInput}
                            onChangeText={value =>
                                this.setState({ pass: value })
                            }
                        />
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row-reverse', marginHorizontal: 15 }}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.haveAccount}>Already have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF8C00', justifyContent: 'center', alignItems: 'center', height: 40, marginHorizontal: 15, marginTop: 40 }}><Text style={{ color: 'white' }}>SIGN UP</Text></TouchableOpacity>
                <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Or signup with social account</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.socialAccount}>
                            <Image 
                               source={require("../../../assets/images/googleLogo.jpg")}
                               style={styles.logo}
                               />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialAccount}>
                            <Image 
                               source={require("../../../assets/images/facebookLogo.png")}
                               style={styles.logo}
                               />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1
    },
    textContainer: {
        marginTop: 60,
        marginLeft: 16
    },
    signUpText: {
        fontWeight: "800",
        fontSize: 34,
        lineHeight: 40.57,
        fontStyle: "normal",
        fontFamily: "SF UI Display"
    },
    textboxes: {
        marginTop: 40
    },
    textboxContainer: {
        marginTop: 10,
        marginHorizontal: 15,
        height: 70,
    },
    textInput: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F2F2F2',
        color: 'black',
        fontSize: 18
    },
    haveAccount: {
        alignItems: 'flex-end',
        fontWeight: '900',
        fontSize: 14,
        textAlign: 'right'
    },
    socialAccount: {
        borderRadius: 24,
        backgroundColor: 'white',
        width: 90,
        height: 64,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginLeft:10,
        marginTop:15
    },
    logo:{
        height:40,
        width:40
    }
})