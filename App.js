import React, { Component } from 'react';
import { Text, View, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Constants from 'expo-constants'
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons'

// Components:
import CreateDeck from './components/CreateDeck'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'


function FlashcardsStatusBar ({backgroundColor, ...props}) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  DeckList:{
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  CreateDeck:{
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create Deck',
      tabBarIcon: ({tintColor}) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
},{
  navigationOptions : {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style:{
      height: 56,
      backgroundColor: 'purple',
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
      width: 0,
      height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  } 
})

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <FlashcardsStatusBar backgroundColor='red' barStyle='light-content' />
        <Tabs/>
      </View>
    );
  }
}