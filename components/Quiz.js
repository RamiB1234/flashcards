import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


class Quiz extends Component{
    render(){
        return(
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Quiz</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
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

export default Quiz