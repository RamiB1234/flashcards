import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
    {
        deckName: 'Revising History',
        numberOfCards: '3'
    },
    {
        deckName: 'Revising Math',
        numberOfCards: '2'
    },
]



class DeckList extends Component {

    reloadDeckList = () =>{
        const {getDecks} = this.props.screenProps
        getDecks()
    }
    componentDidMount(){
        // Force updating the list after naavigation:
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.reloadDeckList()
          })
    }
    render() {
        const { navigate } = this.props.navigation;
        const {decks} = this.props.screenProps
        if(Object.keys(decks).length>0){
            return (
                <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                    <View style={styles.center}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Deck List</Text>
                        {
                            Object.values(decks).map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l.title}
                                    subtitle={l.questions.length+' Cards'}
                                    bottomDivider
                                    onPress={() => navigate('Deck',{title: l.title})}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            )
        }
        else{
            return <View><Text>F</Text></View>
        }

    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: 50
    }

})

export default DeckList