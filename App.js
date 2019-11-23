import React, { Component } from 'react';
import { Text, View, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Constants from 'expo-constants'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

// Components:
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from './utils/api'


function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
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

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck"
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "New Question"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
})

export default class App extends Component {
  state = {
    decks: {}
  }
  componentDidMount() {
    this.getDecks()
  }

  getDecks = () => {
    getDecks().then(decks =>
      this.setState(() => ({
        decks
      }))
    )
  }

  getDeck = (id) => {
    return getDeck(id)
  }

  addDeckTitle = (title) => {

    // Update DB:
    saveDeckTitle(title)

    // Update state:
    getDecks().then(decks =>
      this.setState(() => ({
        decks
      }))
    )
  }

  addQuestion = (title, card) => {
    addCardToDeck(title, card)

    // Update state:
    getDecks().then(decks =>
      this.setState(() => ({
        decks
      }))
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashcardsStatusBar backgroundColor='red' barStyle='light-content' />
        <Stack
          screenProps={
            { decks: this.state.decks, addDeckTitle: this.addDeckTitle, addQuestion: this.addQuestion, getDecks: this.getDecks, getDeck:this.getDeck }} />
      </View>
    );
  }
}