import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import {
    Card,
    Button,
    Subheader
} from 'react-native-material-design';
import _ from 'lodash';
import QuizType from './utils/quizType';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSample} from './utils/fetcher.js';

import Standard from './quizzes/standard.js';
import Multiselect from './quizzes/multiselect.js';
import Codeline from './quizzes/codeLine.js';
import Sortable from './quizzes/sortableCode.js';
import Tabbed from './quizzes/tabbed.js';

const Quiz = React.createClass({
    getInitialState() {
        return {
            showQuiz: true,
            answer: undefined,
            quizzes: [],
            currQuiz: -1
        };
    },

    componentWillMount() {
        var quizzes = Array.apply(null, {length: this.props.data.length}).map(Number.call,Number);
        quizzes = this._shuffle(quizzes);
        this.setState({
            currQuiz: quizzes.length > 0 ? 0 : -1,
            quizzes: quizzes
        });
    },

    _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    },

    _submitQuiz() {
        this.setState({
           showQuiz: false
        });
    },

    _enterHome() {
        this.props.navigator.resetTo({});
    },

    _changeAnswer(value) {
        this.setState({
            answer: value
        });
    },

    _changeQuiz() {
        this.setState({
            currQuiz: this.state.currQuiz + 1,
            answer: undefined,
            showQuiz: true
        });
    },

    _renderFeedback() {
        var currQuizIndex = this.state.quizzes[this.state.currQuiz];
        var quiz = this.props.data[currQuizIndex];

        var mockCorrectAnswer= quiz.data.correctAnswer;
        var correct;
        if (Array.isArray(this.state.answer)) {
            correct = _.isEqual(this.state.answer, mockCorrectAnswer);
        } else {
            correct = (mockCorrectAnswer == this.state.answer);
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

    _renderQuiz() {
        if(this.state.currQuiz < 0)
            return (<View/>);

        var currQuizIndex = this.state.quizzes[this.state.currQuiz];
        var quiz = this.props.data[currQuizIndex];

        var body;
        switch(quiz.type) {
            case QuizType.SORTABLE:
                var sortableData = {};
                quiz.data.possibleAnswers.forEach((e) => {
                    sortableData[e.id] = {text: e.text};
                });
                body = (<Sortable quiz={quiz} data={sortableData} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            case QuizType.TABBED:
                body = (<Tabbed quiz={quiz}/>);
                break;
            case QuizType.STANDARD:
                body = (<Standard quiz={quiz} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            case QuizType.MULTISELECT:
                body = (<Multiselect quiz={quiz} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            case QuizType.CODE:
                body = (<Codeline quiz={quiz} onAnswerChange={this._changeAnswer} onSubmitAnswer={this._submitQuiz}/>);
                break;
            default:
                body = (<View/>);
        }

        return (
            <View style={{flex: 1}}>
                <Subheader text={"QUIZ " + (this.state.currQuiz+1) + " of " + this.state.quizzes.length}/>
                {body}
            </View>
        );
    },

    _renderNextQuiz() {
        if (this.state.quizzes.length == this.state.currQuiz + 1) {
            return (<View/>);
        }
        return (
            <Button text="NEXT QUIZ" onPress={this._changeQuiz}/>
        );
    },

    _renderResponse() {
        return (
            <View style={{paddingTop: 80, justifyContent: 'center', alignItems: 'center'}}>
                {this._renderFeedback()}
                {this._renderNextQuiz()}
                <Button text="RETURN TO HOME" onPress={this._enterHome}/>
            </View>
        );
    },

    render() {
        return (
            <View style={{marginTop: 55, flex: 1}}>
                <Spinner visible={this.state.loading}/>
                {this.state.showQuiz ? this._renderQuiz() : this._renderResponse()}
            </View>
        );
    }
});

export default Quiz;