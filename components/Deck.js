import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


class Deck extends Component{
    state={
      title: '',
      numberOfQuestions: 0
    }
    loadDeck = () =>{
      const { title } = this.props.navigation.state.params
      const {getDeck} = this.props.screenProps
      getDeck(title).then((r)=> this.setState({
        title: title,
        numberOfQuestions: r.questions.length
      }))
    }
    componentDidMount() {
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
        this.loadDeck()
      })
    }
    render(){
      const { navigate } = this.props.navigation
      const {title, numberOfQuestions} = this.state

        return(
            <View style={styles.center}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>
                    {title}
                    </Text>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>
                        {numberOfQuestions} Cards
                    </Text>    
                <TouchableOpacity
                style={styles.submitButton}
                onPress={()=> navigate('NewQuestion', {title: title})}>
                <Text style={styles.submitButtonText}>
                  Add Question
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.submitButton}
                onPress={()=> navigate('Quiz')}>
                <Text style={styles.submitButtonText}>Start Quiz</Text>
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

export default Deck