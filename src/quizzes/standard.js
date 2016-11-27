import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    Card,
    Button,
    RadioButtonGroup
} from 'react-native-material-design';

var Standard = React.createClass({
    render() {
        var quiz = this.props.quiz;

        return (
            <Card style={{paddingBottom: 20}}>
                <Card.Body>
                    <Text>{quiz.data.question}</Text>
                </Card.Body>
                <Card.Body>
                    <View>
                        <RadioButtonGroup
                            onSelect={this.props.onAnswerChange}
                            items={quiz.data.possibleAnswers.map((answerChoice) => {return {value: answerChoice.id, label: answerChoice.text}})}
                        />
                    </View>
                </Card.Body>
                <Button text="SUBMIT" onPress={this.props.onSubmitAnswer}/>
            </Card>
        );
    }
});

export default Standard;