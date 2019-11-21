import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
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
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Deck List</Text>
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.deckName}
                            subtitle={l.numberOfCards+ ' cards'}
                            bottomDivider
                            onPress={() => navigate('Deck')}
                        />
                    ))
                }
            </View>
        )
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