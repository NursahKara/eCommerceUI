import * as React from 'react';
import { Text, View,Image,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen1 from './screens/Main/main1';
import MainScreen2 from './screens/Main/main2';
import SearchScreen from './screens/Main/search';
import WomenShoesDetail from './screens/Main/womenShoesDetail';
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginLeft: 25, marginTop: '5%' }}>
        <View style={{ marginBottom: 10, flex: 3 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Menu')}>
            {/* <View style={{ flex: 1 }}>
              <Image  source={require('../assets/icons/menu.png')} style={{ width:25,height:25}}/>
            </View> */}
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Ana Sayfa</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, flex: 3 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('BarcodeScannerScreen')}>
            {/* <View style={{ flex: 1 }}>
            <Image  source={require('../assets/icons/pantry.png')} style={{ width:25,height:25}}/>
            </View> */}
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Barkod Okut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const StackMain = createStackNavigator();
function MainStack() {
  return (
    <StackMain.Navigator initialRouteName="Main">
      <StackMain.Screen name="Main1" component={MainScreen1} options={navOptionHandler} />
      <StackMain.Screen name="Main2" component={MainScreen2} options={navOptionHandler} />
    </StackMain.Navigator>
  )
}
const StackSearch = createStackNavigator();
function SearchStack() {
  return (
    <StackSearch.Navigator initialRouteName="SearchScreen">
      <StackSearch.Screen name="SearchScreen" component={SearchScreen} options={navOptionHandler}/>
      <StackSearch.Screen name="WomenShoesDetail" component={WomenShoesDetail} options={navOptionHandler}/>

    </StackSearch.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

function TabNavigator() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Anasayfa') {
            iconName = focused
              ? require('../assets/images/home-blue.png')
              : require('../assets/images/home2.png')
          } else if (route.name === 'Ara') {
            iconName = focused
              ? require('../assets/images/loupe.png')
              : require('../assets/images/search.png')
          } else if (route.name === 'Favoriler') {
            iconName = focused
              ? require('../assets/images/heart-red.png')
              : require('../assets/images/heart.png')
          } else if (route.name === 'Sepet') {
            iconName = focused
              ? require('../assets/images/cart-color.png')
              : require('../assets/images/cart.png')
          } else if (route.name === 'Kullanıcı') {
            iconName = focused
              ? require('../assets/images/user-blue.png')
              : require('../assets/images/user.png')
          }
          

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
        },
      })}
      tabBarComponent='TabBarBottomKeyboardAware'
      initialRouteName="Menü"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 50,
          paddingBottom: 5,
        }
      }}
    >
      <Tab.Screen name="Anasayfa" component={MainStack}  />
      <Tab.Screen name="Ara" component={SearchStack} />
      <Tab.Screen name="Favoriler" component={MainScreen1} />
      <Tab.Screen name="Sepet" component={MainScreen1} />
      <Tab.Screen name="Kullanıcı" component={MainScreen1} />
    </Tab.Navigator>
  );
}

// const Drawer = createDrawerNavigator();
// function DrawerNavigator(
// ) {
//   return (
//     <Drawer.Navigator initialRouteName="Menu" drawerContent={props => CustomDrawerContent(props)}>
//       <Drawer.Screen name="Menu" component={TabNavigator} />
//       {/* <Drawer.Screen name="BarcodeScannerScreen" component={BarcodeStack} /> */}
//     </Drawer.Navigator>
//   )
// }
const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="HomeApp" component={TabNavigator} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
