import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    Card,
    Button
} from 'react-native-material-design';
import MultipleChoice from 'react-native-multiple-choice';

var Codeline = React.createClass({
    render() {
        var quiz = this.props.quiz;

        return (
            <Card style={{paddingBottom: 20}}>
                <Card.Body>
                    <Text>{quiz.data.question}</Text>
                </Card.Body>
                <Card.Body>
                    <View style={{margin: 20}}>
                        <MultipleChoice
                            options={quiz.data.possibleAnswers}
                            maxSelectedOptions={1}
                            onSelection={this.props.onAnswerChange}
                        />
                    </View>
                </Card.Body>
                <Button text="SUBMIT" onPress={this.props.onSubmitAnswer}/>
            </Card>
        );
    }
});

export default Codeline;