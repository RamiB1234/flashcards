import React, {Component} from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';


class CreateDeck extends Component{
    submit = () => {
        const { navigate } = this.props.navigation;
        navigate('DeckList')
    }
    render(){
        return(
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Create Deck</Text>
                <View style={styles.row}>
                    <Text style={{fontSize: 20}}>
                        Deck Name:
                    </Text>
                    <TextInput
                    style={{ height: 40, width: 170, borderColor: 'gray', borderWidth: 1 }}
                    />             
                </View>
                <TouchableOpacity
                style={styles.submitButton}
                onPress={this.submit}>
                <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
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
        marginTop:50,
        marginBottom: 50
      },
      row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
      },
      submitButton: {
        backgroundColor: 'purple',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height:45,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      },
      submitButtonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
      },

})

export default CreateDeck