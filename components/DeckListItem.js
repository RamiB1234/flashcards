import React, { Component } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

class DeckListitem extends Component {
    state = {
        animatedValue: new Animated.Value(15)
    }
    reset() {
        this.state.animatedValue.setValue(15)
    }
    render() {
        const { animatedValue } = this.state
        const { navigate, l } = this.props
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    Animated.spring(animatedValue, { toValue: 25, friction: 4 })
                        .start(() => {
                            this.reset()
                            navigate('Deck', { title: l.title })
                        })
                }}
            >
                <Animated.Text style={[styles.text], { fontSize: animatedValue }}>
                    {l.title}
                </Animated.Text>
                <Text style={styles.subText}>
                    {l.questions.length} Cards
            </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
    },
    subText: {
        color: '#4f603c',
        fontSize: 10
    }

})

export default DeckListitem