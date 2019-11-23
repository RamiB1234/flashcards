import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card'


class Quiz extends Component {
    state = {
        questions: [],
        currentQuestionNumber: 1,
        numberOfQuestions: 0,
        correctAnswers: 0
    }
    markCorrectAnswer = () => {

        // Increase counter:
        this.setState((prevState) => ({
            currentQuestionNumber: prevState.currentQuestionNumber + 1,
            correctAnswers: prevState.correctAnswers +1
        }))
    }
    martIncorrectAnswer = () => {

        // Increase counter:
        this.setState((prevState) => ({
            currentQuestionNumber: prevState.currentQuestionNumber + 1
        }))

    }

    loadQuestions = () => {
        const { title } = this.props.navigation.state.params
        const {getDeck} = this.props.screenProps

        getDeck(title).then((r)=> this.setState({
            questions: r.questions,
            numberOfQuestions: r.questions.length
          }))

    }

    resetQuiz = () => {
        this.setState({
            correctAnswers: 0,
            currentQuestionNumber: 1,
        })
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.loadQuestions()
    })
}
    render() {
        const {questions, currentQuestionNumber, numberOfQuestions, correctAnswers} = this.state
        const { goBack } = this.props.navigation

        if(currentQuestionNumber <= numberOfQuestions){
            return (
                <View style={styles.center}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Quiz</Text>
                    <FlipCard>
                        {/* Face Side */}
                        <View style={styles.face}>
                            <Text>Question</Text>
                            <Text>{questions[currentQuestionNumber-1].question}</Text>
                        </View>
                        {/* Back Side */}
                        <View style={styles.back}>
                            <Text>Answer</Text>
                            <Text>{questions[currentQuestionNumber-1].answer}</Text>
                        </View>
                    </FlipCard>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={this.markCorrectAnswer}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.martIncorrectAnswer}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>
                            Question {currentQuestionNumber}/{numberOfQuestions}
                        </Text>
                        <Text style={{ fontSize: 10 }}>
                            Tab on the card to flip
                        </Text>
                    </View>
                </View>
            )
        }
        else{ // Show score:
            return(
                <View style={styles.center}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Your score: 70%</Text>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>{correctAnswers}/{numberOfQuestions}</Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.submitButton} onPress={this.resetQuiz}>
                            <Text style={styles.submitButtonText}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.submitButton} onPress={()=> goBack()}>
                            <Text style={styles.submitButtonText}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    submitButton: {
        flex: 1,
        backgroundColor: 'purple',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 55,
        borderRadius: 10,
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
    face: {
        backgroundColor: 'yellow',
        flex: 1
    },
    back: {
        backgroundColor: 'red',
        flex: 1
    }

})

export default Quiz