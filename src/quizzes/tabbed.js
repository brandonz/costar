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
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Lightbox from 'react-native-lightbox';

var Tabbed = React.createClass({
    getDefaultProps() {
        return {
            tab1Title: 'Diagram',
            tab2Title: 'Questions'
        };
    },

    getInitialState() {
        return ({
            showQuiz: false
        });
    },

    _renderQuiz() {

    },

    _renderResponse() {

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
            <View style={{flex:1}}>
                <Card>
                    <Card.Body>
                        <Text>{quiz.data.question}</Text>
                    </Card.Body>
                </Card>
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
                    <View tabLabel={this.props.tab2Title}>
                        {this._renderQuestionTab()}
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
});

export default Tabbed