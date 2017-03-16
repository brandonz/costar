import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
import {
    Card,
    Button,
    Subheader
} from 'react-native-material-design';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Lightbox from 'react-native-lightbox';
import Icon from 'react-native-vector-icons/Ionicons';

import QuizType from '../utils/quizType.js';
import _ from 'lodash';

import Standard from './standard.js';
import Multiselect from './multiselect.js';

var Tabbed = React.createClass({
    getDefaultProps() {
        return {
            tab1Title: 'Diagram',
            tab2Title: 'Questions'
        };
    },

    getInitialState() {
        return ({
            showQuiz: true,
            currQuiz: 0,
            answer: undefined
        });
    },

    _changeAnswer(answer) {
        this.setState({
            answer: answer
        });
    },

    _submitQuiz() {
        this.setState({
            showQuiz: false
        });
    },

    _changeQuiz() {
        this.setState({
            currQuiz: this.state.currQuiz + 1,
            answer: undefined,
            showQuiz: true
        });
    },

    _renderQuiz() {
        if (this.state.currQuiz == this.props.quiz.data.quizzes.length)
            return (<View/>);

        var quiz = this.props.quiz.data.quizzes[this.state.currQuiz];
        var body;
        switch(quiz.type) {
            case QuizType.STANDARD:
                body = (<Standard quiz={quiz} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            case QuizType.MULTISELECT:
                body = (<Multiselect quiz={quiz} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            default:
                body = (<View/>);
        }

        return (
            <View style={{flex: 1}}>
                <Subheader text={"QUESTION " + (this.state.currQuiz+1) + " of " + this.props.quiz.data.quizzes.length}/>
                {body}
            </View>
        );
    },

    _renderResponse() {
        return (
            <View style={{paddingTop: 80, justifyContent: 'center', alignItems: 'center'}}>
                {this._renderFeedback()}
                {this._renderNextQuiz()}
            </View>
        );
    },

    _renderFeedback() {
        var quiz = this.props.quiz.data.quizzes[this.state.currQuiz];

        var correctAnswer = quiz.data.correctAnswer;
        var correct;
        if (Array.isArray(this.state.answer)) {
            correct = _.isEqual(this.state.answer, correctAnswer);
        } else {
            correct = (correctAnswer == this.state.answer);
        }

        if (correct) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 100, width: 100}}>
                    <Icon name="md-checkmark" style={{fontSize: 100, height: 100, color: 'green', textAlign: 'center'}} />
                </View>
            );
        } else {
            return (
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 100, width: 100}}>
                        <Icon name="md-close" style={{fontSize: 100, height: 100, color: 'red', textAlign: 'center'}} />
                    </View>
                    {quiz.data.explanation ?
                        (<Card>
                            <Card.Body>
                                <Text>{quiz.data.explanation}</Text>
                            </Card.Body>
                        </Card>) : (<View/>)
                    }
                </View>
            );
        }
    },

    _renderNextQuiz() {
        if (this.props.quiz.data.quizzes.length == this.state.currQuiz) {
            return (<View/>);
        }
        return (
            <Button text="NEXT QUESTION" onPress={this._changeQuiz}/>
        );
    },

    _renderQuestionTab() {
        return(
            <View style={{flex: 1}}>
                {this.state.showQuiz ? this._renderQuiz() : this._renderResponse()}
            </View>
        );
    },

    render() {
        var quiz = this.props.quiz;
        return (
            <ScrollView style={{flex:1}}>
                <Card>
                    <Card.Body>
                        <Text>{quiz.data.question}</Text>
                    </Card.Body>
                </Card>
                {this.state.currQuiz == this.props.quiz.data.quizzes.length ?
                    (<Button text="NEXT QUIZ" onPress={this.props.submit}/>) :
                    (
                        <ScrollableTabView
                            style={{flex: 1}}
                            initialPage={0}
                            renderTabBar={() => <ScrollableTabBar/>}
                        >
                            <View tabLabel={this.props.tab1Title}>
                                <Lightbox style={{paddingTop: 10}}>
                                    <Image
                                        resizeMode="contain"
                                        style={{flex: 1, height: 220}}
                                        source={{ uri: quiz.data.uri }}
                                    />
                                </Lightbox>
                            </View>
                            <View tabLabel={this.props.tab2Title} style={{flex: 1}}>
                                {this._renderQuestionTab()}
                            </View>
                        </ScrollableTabView>
                    )
                }
            </ScrollView>
        );
    }
});

export default Tabbed