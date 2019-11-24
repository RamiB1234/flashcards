import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem'

class DeckList extends Component {
    reloadDeckList = () => {
        const { getDecks } = this.props.screenProps
        getDecks()
    }
    componentDidMount() {
        // Force updating the list after naavigation:
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.reloadDeckList()
        })
    }
    render() {
        const { decks } = this.props.screenProps

        if (decks && Object.keys(decks).length > 0) {
            return (
                <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                    <View style={styles.center}>
                        <Text style={{ fontSize: 30, textAlign: 'center' }}>Deck List</Text>
                        {
                            Object.values(decks).map((l, i) => (
                                <DeckListItem key={i} l={l} navigate={this.props.navigation.navigate} />
                            ))
                        }
                    </View>
                </ScrollView>
            )
        }
        else {
            return <View style={styles.centerReal}>
                <Text>Nothing to show</Text>
            </View>
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
    },
    centerReal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: 50
    }

})

export default DeckList