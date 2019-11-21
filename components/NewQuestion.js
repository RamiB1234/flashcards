import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class NewQuestion extends Component{
    render(){
        return(
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>New Question</Text>
                <View style={styles.row}>
                    <Text style={{fontSize: 20}}>
                        Question:
                    </Text>
                    <TextInput
                    style={{ height: 40, width: 170, borderColor: 'gray', borderWidth: 1 }}
                    />             
                </View>
                <View style={styles.row}>
                    <Text style={{fontSize: 20}}>
                        Answer:
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

export default NewQuestion