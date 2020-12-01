import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from './screens/Main/main1';
import SearchScreen from './screens/Main/search';
import WomenScreen from './screens/Main/women';
import MenScreen from './screens/Main/men';
import KidsScreen from './screens/Main/kids';
import WomenShoesDetailScreen from './screens/Main/womenShoesDetail';
import NewWomenScreen from './screens/Main/newWomen';



const RouterComp = () => {
    return (
        <Router titleStyle={{ color: '#000' }}  >
            <Scene key='root' hideNavBar={true}>
                <Scene key='main'>
                    <Scene key='main'
                        component={MainScreen}
                        title='Anasayfa'
                        hideNavBar={true}
                        animation='fade'
                        initial
                    />
                    <Scene key='search'
                        component={SearchScreen}
                        title='Ara'
                        animation='fade'
                        hideNavBar={true}
                    />
                     <Scene key='women'
                        component={WomenScreen}
                        title='women'
                        animation='fade'
                        hideNavBar={true}
                    />
                    <Scene key='men'
                        component={MenScreen}
                        title='men'
                        animation='fade'
                        hideNavBar={true}
                    />
                    <Scene key='kids'
                        component={KidsScreen}
                        title='men'
                        animation='fade'
                        hideNavBar={true}
                    />
                      <Scene key='womenShoesDetail'
                        component={WomenShoesDetailScreen}
                        title='Women Shoes Detail'
                        animation='fade'
                        hideNavBar={true}
                    />
                      <Scene key='womenShoesDetail'
                        component={WomenShoesDetailScreen}
                        title='Women Shoes Detail'
                        animation='fade'
                        hideNavBar={true}
                    />
                        <Scene key='newWomen'
                        component={NewWomenScreen}
                        title='new Women'
                        animation='fade'
                        hideNavBar={true}
                    />
            
                </Scene>
            </Scene>
        </Router>
    )
}
export default RouterComp
