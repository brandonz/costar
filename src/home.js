import React from 'react';
import {
    Animated,
    StyleSheet,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Image,
    ListView
} from 'react-native';
import _ from 'lodash';
import {
    Divider
} from 'react-native-material-design';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import Accordion from 'react-native-accordion';
import FadeInView from './utils/FadeInView.js';

import {getSample} from './utils/fetcher';
import Scene from './utils/scene';
import styles from './styles/home.js';

import mockedData from './utils/mockedData';

const headerImage = require('./images/header3.png');
const HEADER_HEIGHT = 150;
const NAVBAR_HEIGHT = 50;

const Home = React.createClass({

    route: {
        navigationBar: {
            visible: false
        }
    },

    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            scrollY: new Animated.Value(0),
            loading: true,
            dataSource: ds.cloneWithRows([]),
            numberOfSubtopics: 0
        };
    },

    componentWillMount() {

        getSample().then((resp) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this._processTopicData(mockedData)),
                loading: false,
                numberOfSubtopics: mockedData.length
            });
        }).catch(() => {
            this.setState({
               loading: false
            });
        });
    },

    _processTopicData(subtopics) {
        var topics = {};

        subtopics.map((subtopic) => {
            var topicVal = topics[subtopic.topic.id];
            if (topicVal) {
                topicVal.push(subtopic);
            } else {
                topics[subtopic.topic.id] = [subtopic];
            }
        });

        var dataSource = [];
        _.forEach(topics, (value, key) => {
           dataSource.push(value);
        });
        return dataSource;
    },

    _enterContent(title, content, quiz) {
         var data = {
             content: content,
             quiz: quiz
         };
        this.props.navigator.push({
            id: Scene.CONTENT,
            contentData: data,
            title: title
        })
    },

    _enterRandomQuiz() {
        var randomIndex =  Math.floor(Math.random() * this.state.numberOfSubtopics);

        var topics = this.state.dataSource._dataBlob['s1'];
        var subtopicIndex = 0;
        var topicIndex = 0;
        var index = -1;
        for(var i = 0; i < topics.length; i++) {
            subtopicIndex = -1;
            for (var j = 0; j < topics[i].length; j++) {
                subtopicIndex++;
                index++;
                if (index == randomIndex)
                    break;
            }
            if (index == randomIndex)
                break;
            topicIndex++;
        }

        // var quiz = this.state.dataSource._dataBlob['s1'][topicIndex][subtopicIndex].quiz;
        // this.props.navigator.push({
        //     id: Scene.QUIZ,
        //     quizData: quiz
        // });

        //TODO: update
        this.props.navigator.push({
            id: Scene.QUIZ,
            quizData: this.state.dataSource._dataBlob['s1'][0][0].quiz
        });
    },

    _renderRow(row, sectionId, rowId) {
        var header = (
            <View>
                <View style={{
                    paddingTop: 15,
                    paddingRight: 15,
                    paddingLeft: 15,
                    paddingBottom: 15,
                    backgroundColor: '#f9f9f9'
                }}>
                    <Text>{row[0].topic.title}</Text>
                </View>
                <Divider/>
            </View>
        );

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var content = (
            <ListView
                dataSource={ds.cloneWithRows(row)}
                renderRow={this._renderSubtopic}
            />
        );

        return (
            <FadeInView delay={30*rowId}>
                <Accordion
                    header={header}
                    content={content}
                />
            </FadeInView>
        );
    },

    _renderSubtopic(subtopic) {
        return (
            <View
                style={{
                    backgroundColor: '#31363D'
                }}
            >
                <TouchableOpacity
                    onPress={() => this._enterContent(subtopic.title, subtopic.content, subtopic.quiz)}
                >
                    <Text style={{
                        paddingTop: 15,
                        paddingRight: 15,
                        paddingLeft: 15,
                        paddingBottom: 15,
                        color: '#fff'
                    }}>
                        {subtopic.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    _renderContent() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                    style={{marginBottom: 30}}
                />
            </View>
        );
    },

    render() {
        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_HEIGHT - NAVBAR_HEIGHT],
            outputRange: [1, 0]
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 100]
        });
        const imageScale = this.state.scrollY.interpolate({
            inputRange: [-100, 0, 100],
            outputRange: [2.5, 1, 1],
            extrapolate: 'clamp'
        });
        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [-1, -200]
        });
        const navBarBackgroundOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_HEIGHT - NAVBAR_HEIGHT - 1, HEADER_HEIGHT - NAVBAR_HEIGHT],
            outputRange: [0, 0, 1]
        });
        const titleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 220, 250],
            outputRange: [0, 0, 1]
        });
        const titleTranslate = this.state.scrollY.interpolate({
            inputRange:  [-1,  0, 220, 250, 251],
            outputRange: [10, 10, 10,   0,   0],
            extrapolate: 'clamp'
        });

        return (
            <View style={{flex: 1}}>
                <Spinner visible={this.state.loading}/>
                <View style={{height: Platform.OS === 'android' ? 24 : 26, position: 'absolute', top: 0, left: 0, right:0, backgroundColor: 'black'}} />
                <View style={[styles.fill, { overflow: 'hidden' }]}>
                    <Animated.ScrollView
                        scrollEventThrottle={16}
                        style={styles.fill}
                        contentContainerStyle={styles.content}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                            { useNativeDriver: true }
                        )}
                    >
                        <Text style={styles.name}>Topics</Text>
                        {this._renderContent()}
                    </Animated.ScrollView>

                    <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]} pointerEvents="none">
                        <Animated.Image
                            style={[styles.image, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }, { scale: imageScale } ] }]}
                            resizeMode="cover"
                            source={headerImage}
                        />
                    </Animated.View>


                    {/*<View style={styles.navbar}>
                        <Animated.View style={[styles.navbarBackground, { opacity: navBarBackgroundOpacity }]} />

                        <View style={[StyleSheet.absoluteFill, {flexDirection: 'row', alignItems: 'center'}]}>
                            <Animated.View pointerEvents="none" style={[styles.titleContainer, {opacity: titleOpacity, transform: [{ translateY: titleTranslate }] }]}>
                                <Text style={styles.title}>
                                    COStar
                                </Text>
                            </Animated.View>
                            <View style={styles.rightButton} />
                        </View>
                    </View>*/}
                </View>

                <StatusBar barStyle="light-content" />

                <ActionButton
                    buttonColor="rgba(231, 76, 60, 1)"
                    onPress={this._enterRandomQuiz}
                />
                {/*<ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Random Quiz" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Quiz Scores" onPress={() => {}}>
                        <Icon name="md-stats" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Settings" onPress={() => {}}>
                        <Icon name="md-settings" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>*/}
            </View>
        );
    }
});

export default Home;