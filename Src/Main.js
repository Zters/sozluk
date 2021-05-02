import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './Screens/Home/Home';
import Name from './Screens/Name/Name';
import Search from './Screens/Search/Search';
import Savedr from './Screens/Savedr/Savedr';
import Word from './Screens/Word/Word';
import History from './Screens/History/History';

const tabBarIcon = name => ({ tintColor }) => (
    <FontAwesome style={{ backgroundColor: 'transparent' }} name={name} color={tintColor} size={25} />
);

const BottomNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: tabBarIcon('home'),
            title: "Anasayfa",

        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: tabBarIcon('search'),
            title: "Ara",

        })
    },
    Saved: {
        screen: Saved,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: tabBarIcon('save'),
            title: "Kayıtlı",

        })
    },
    History: {
        screen: History,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: tabBarIcon('history'),
            title: "Geçmiş"
        })
    },
}, {
    backBehavior: 'history',
    initialRouteName: 'Home',
    shifting: true,
});

const MainNavigator = createStackNavigator({
    BottomNavigator: {
        screen: BottomNavigator,
        path: 'home',
        navigationOptions: ({ navigation }) => ({ headerShown: false, })
    },
    Name: {
        screen: Name,
        navigationOptions: {
            title: 'İsim Sorgula',
        }
    },
    Word: {
        screen: Word,
        navigationOptions: {
            title: 'Sözcük Sorgula',
        }
    },
}, {
    backBehavior: 'history',
    initialRouteName: 'BottomNavigator',
    defaultNavigationOptions: {
        headerShown: true,
    }
});

export default createAppContainer(MainNavigator);