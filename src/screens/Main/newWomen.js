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
    Image,
    ImageBackground, Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');

export default class New extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

            </SafeAreaView>
        )
    }
}
var styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignSelf: 'stretch'
    },
    cardLeft: {
        width: '45%',
        height: 220,
        alignItems: 'flex-start',
        backgroundColor: 'black',
        marginRight: '3%',
        marginLeft: '4%',
        marginTop: '4%',


    },
    cardRight: {
        width: '45%',
        height: 220,
        alignItems: 'flex-end',
        backgroundColor: 'black',
        marginRight: '4%',
        marginTop: '4%'

    },
    imageContent: {
        resizeMode: 'stretch',
        width: '100%',
        height: 220
    }
})