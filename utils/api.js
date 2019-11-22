import { AsyncStorage } from 'react-native'
const STORAGE_KEY = 'DECK_LIST_KEY'

export async function getDecks(){
    return JSON.parse(await AsyncStorage.getItem(STORAGE_KEY))

}

export async function getDeck(id){
    const decks = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY))
    return decks[id]
}

export function saveDeckTitle(title){
    const deck={
        title: title,
        questions: []
    }
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title] :deck,
    }))

}

export async function addCardToDeck(title, card){
    const decks = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY))
    let deck = decks[title]

    deck.questions.push(card)

    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title] : deck,
    }))
}