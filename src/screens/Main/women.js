import React from 'react';
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
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');
const Women = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <View style={styles.cardFirst}>
                        <Text style={{ color:'white',fontSize:24,fontWeight:'bold'}}>MIDSEASON SALE</Text>
                        <Text style={{ color:'white',fontSize:14}}>Up to 50% off</Text>

                    </View>
                    <TouchableOpacity 
                     onPress={() =>Actions.newWomen}
                    style={styles.card}>
                        <View style={styles.left}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>NEW IN</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source={require("../../../assets/images/maincontent5.png")} style={{ height: 100, width: '100%', resizeMode: 'stretch' }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.left}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>CLOTHING</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source={require("../../../assets/images/maincontent6.png")} style={{ height: 100, width: '100%', resizeMode: 'stretch' }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>Actions.womenShoesDetail}
                    style={styles.card}>
                        <View style={styles.left}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>SHOES</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source={require("../../../assets/images/maincontent7.png")} style={{ height: 100, width: '100%', resizeMode: 'stretch' }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.left}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ACCESSORIES</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source={require("../../../assets/images/maincontent8.png")} style={{ height: 100, width: '100%', resizeMode: 'stretch' }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.left}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>NEW IN</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source={require("../../../assets/images/maincontent5.png")} style={{ height: 100, width: '100%', resizeMode: 'stretch' }} />
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cardFirst: {
        width: '90%',
        height: 100,
        backgroundColor: '#2D9CDB',
        justifyContent:'center',
        alignItems:'center',
       
    },
    card: {
        width: '90%',
        height: 100,
        backgroundColor: '#F2F2F2',
        marginTop: 10,
        flexDirection: 'row',
        flex: 1
    },
    left: {
        alignItems: 'flex-start',
        flex: 6,
        justifyContent: 'center',
        marginLeft: 20,


    },
    right: {
        alignItems: 'flex-end',
        height: 100,
        flex: 6,
        width: '50%'
    }
})
export default Women;