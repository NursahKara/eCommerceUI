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

export default class WomenShoesDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 7 }}>
                    <ImageBackground source={require("../../../assets/images/main11.jpg")}
                        style={styles.image}>
                        <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', marginTop: '50%', paddingLeft: 10 }}>Givenchy</Text>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginTop: '1%', paddingLeft: 10 }}>The Latest Drop</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                            <TouchableOpacity style={{ color: 'white', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '50%', height: 40 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>SHOP NOW</Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
                <View style={{ flex: 5 }}>
                <ScrollView>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.cardLeft}>
                                <Image source={require("../../../assets/images/maincontent2.png")} style={styles.imageContent} />
                               <View style={{justifyContent:'center',alignItems:'center',marginTop:220}}>
                               <Text style={{fontWeight:'bold',fontSize:18,}}>OUR LEGACY</Text>
                                <Text style={{fontSize:13}}>OUR LEGACY</Text>
                               </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardRight}>
                                <Image source={require("../../../assets/images/maincontent1.jpg")} style={styles.imageContent} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.cardLeft}>
                                <Image source={require("../../../assets/images/maincontent2.png")} style={styles.imageContent} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardRight}>
                                <Image source={require("../../../assets/images/maincontent1.jpg")} style={styles.imageContent} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.cardLeft}>
                                <Image source={require("../../../assets/images/maincontent2.png")} style={styles.imageContent} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardRight}>
                                <Image source={require("../../../assets/images/maincontent1.jpg")} style={styles.imageContent} />
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                </View>

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