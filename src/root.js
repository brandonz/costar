import React from 'react';
import {
    Navigator
} from 'react-native';
import Home from './home.js';
import Content from './content.js';
import Quiz from './quiz.js';
import NavigationBar from './utils/NavigationBar';
import Scene from './utils/scene';

import OneSignal from 'react-native-onesignal';

const Root = React.createClass({
    componentDidMount() {
        OneSignal.configure({});
    },

    renderScene(route, navigator) {
        switch(route.id) {
            case Scene.CONTENT:
                return <Content navigator={navigator} data={route.contentData}/>;
            case Scene.QUIZ:
                return <Quiz navigator={navigator} data={route.quizData}/>;
            default:
                return <Home navigator={navigator}/>;
        }
    },

    render() {
        return (
            <Navigator
                ref="navigator"
                style={{flex: 1}}
                initialRoute={{id: Scene.HOME, title:'COSTAR'}}
                renderScene={this.renderScene}
                navigationBar={NavigationBar}
            />
        );
    }
});

export default Root;