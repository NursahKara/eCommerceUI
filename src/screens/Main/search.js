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
    Image, Dimensions
} from 'react-native';
import Women from './women';
import Men from './men';
import Kids from './kids';
import { TabView, SceneMap,TabBar,  } from 'react-native-tab-view';



const initialLayout = { width: Dimensions.get('window').width };



export default function TabViewExample() {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([

        { key: 'first', title: 'Women'},

        { key: 'second', title: 'Men' },

        { key: 'third', title: 'Kids' },

    ]);


    const renderScene = SceneMap({

        first: Women,

        second: Men,

        third: Kids

    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={{ alignItems: 'flex-start', flex: 1, justifyContent: 'center', paddingLeft: 5 }}>
                    <Image source={require("../../../assets/images/back.png")} style={{ width: 20, height: 20, }} />
                </TouchableOpacity>
                <View style={{ flex: 10, marginLeft: 9 ,justifyContent:'center'}}>
                    <TextInput
                        placeholder="Search..."
                        style={styles.textInput}
                        onChangeText={value =>
                            this.setState({ search: value })
                        }
                    />
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center', paddingRight: 10 }}>
                    <Image source={require("../../../assets/images/search2.png")} style={{ width: 30, height: 30 }} />
                </View>
            </View>
            <View style={{borderWidth:0.5,borderColor:'#ddd'}}></View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={(props) => {
                    return (
                      <TabBar
                        {...props}
                        renderIndicator={() => null}
                        onTabPress={({ route }) => {
                          // console.log(route)
                        }}
                        activeColor="#000"
                        inactiveColor="#c2c3c8"
                        indicatorStyle={{ backgroundColor: '#000' }}
                        style={{ backgroundColor: '#fff',color:'black' }}
                      />
                    )
                  }}
            />
        </SafeAreaView>


    );

}



const styles = StyleSheet.create({

    scene: {

        flex: 1,

    },
    header: {
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    textInput: {
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },

}); 