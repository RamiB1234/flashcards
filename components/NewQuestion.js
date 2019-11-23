import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class NewQuestion extends Component{
    state={
        question : '',
        answer: ''
    }
    submit = () => {
        const { goBack } = this.props.navigation;
        const {addQuestion} = this.props.screenProps
        const { title } = this.props.navigation.state.params
        const card = {
            question: this.state.question,
            answer: this.state.answer
        }
        addQuestion(title, card)
        goBack()
    }
    render(){
        const {question, answer} = this.state
        return(
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>New Question</Text>
                <View style={styles.row}>
                    <Text style={{fontSize: 20}}>
                        Question:
                    </Text>
                    <TextInput
                    style={{ height: 40, width: 170, borderColor: 'gray', borderWidth: 1 }}
                    value={question}
                    onChangeText = {(text) => { this.setState({ question: text})}}
                    />             
                </View>
                <View style={styles.row}>
                    <Text style={{fontSize: 20}}>
                        Answer:
                    </Text>
                    <TextInput
                    style={{ height: 40, width: 170, borderColor: 'gray', borderWidth: 1 }}
                    value={answer}
                    onChangeText = {(text) => { this.setState({ answer: text})}}
                    />             
                </View>
                <TouchableOpacity
                style={question === '' || answer === '' ? styles.submitButtonDisabled : styles.submitButton}
                onPress={this.submit}
                disabled = {question === '' || answer === ''}>
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
      submitButtonDisabled: {
        backgroundColor: '#cccccc',
        color: '#666666',
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