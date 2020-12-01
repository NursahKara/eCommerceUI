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

export default class ForgotPassScreen extends Component {
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
                        Forgot Password
                    </Text>
                </View>
                <View style={styles.textboxes}>


                   <Text style={{fontSize:14,lineHeight:20}}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
                    <View style={styles.textboxContainer}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            onChangeText={value =>
                                this.setState({ email: value })
                            }
                        />
                    </View>
                </View>
              
                <TouchableOpacity style={{ backgroundColor: '#FF8C00', justifyContent: 'center', alignItems: 'center', height: 40, marginHorizontal: 15, marginTop: 40 }}><Text style={{ color: 'white' }}>SEND</Text></TouchableOpacity>
              
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
        marginTop: 80,
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
        marginTop: 100,
        marginHorizontal:15
    },
    textboxContainer: {
        marginTop: 16,
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
        marginTop:'5%'
    },
    logo:{
        height:40,
        width:40
    }
})