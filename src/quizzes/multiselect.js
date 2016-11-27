import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    Card,
    Button,
    CheckboxGroup
} from 'react-native-material-design';

var Multiselect = React.createClass({
    render() {
        var quiz = this.props.quiz;

        return (
            <Card style={{paddingBottom: 20}}>
                <Card.Body>
                    <Text>{quiz.data.question}</Text>
                </Card.Body>
                <Card.Body>
                    <View>
                        <CheckboxGroup
                            onSelect={(answer) => this.props.onAnswerChange(answer.sort())}
                            items={quiz.data.possibleAnswers.map((answerChoice) => {
                                return {
                                    value: answerChoice.id,
                                    label: answerChoice.text
                                };
                            })}
                        />
                    </View>
                </Card.Body>
                <Button text="SUBMIT" onPress={this.props.onSubmitAnswer}/>
            </Card>
        );
    }
});

export default Multiselect;