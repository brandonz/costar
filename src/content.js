import React from 'react';
import {
    View,
    Text,
    Image,
    WebView,
    ScrollView,
    IntentAndroid
} from 'react-native';
import {
    Card,
    Button,
    COLOR,
    TYPO,
    PRIMARY_COLORS
} from 'react-native-material-design';
import ActionButton from 'react-native-action-button';
import Scene from './utils/scene.js';
import Content from './utils/contentType.js';
import Lightbox from 'react-native-lightbox';

export default React.createClass({

    _enterQuiz() {
        this.props.navigator.push({
            id: Scene.QUIZ,
            quizData: this.props.data.quiz
        })
    },

    _renderImage(data, key) {
        // var sampleUri = 'http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif';
        // var sampleText = 'This is some sample text';
        // return(
        //     <Card>
        //         <Card.Media
        //             image={<Image source={{uri: sampleUri}}/>}
        //         />
        //         <Card.Body>
        //             <Text>{sampleText}</Text>
        //         </Card.Body>
        //     </Card>
        // );

        return (
            <Card key={key}>
                <Card.Body>
                    <Lightbox>
                        <Image
                            resizeMode="contain"
                            style={{height: data.height}}
                            source={{ uri: data.url }}
                        />
                    </Lightbox>
                </Card.Body>
                <Card.Body>
                    <Text>{data.text}</Text>
                </Card.Body>
            </Card>
        );
    },

    _renderHyperText(data, key) {
        // var htmlCode="<b>I am rendered in a <i>WebView</i></b>TEST<h1>CAPS</h1>";
        // return (
        //     <View style={{flex:1, paddingTop: 80}}>
        //         <WebView
        //             style={{height:500, width:500}}
        //             source={{html: htmlCode}}
        //             startInLoadingState={true}
        //             scalesPageToFit={true}
        //         />
        //     </View>
        // );

        return (
            <Card key={key}>
                <Card.Body>
                    <Text>{data.markup}</Text>
                </Card.Body>
            </Card>
        );
    },

    _renderVideo(data, key) {
        // var video = '<iframe width="260" height="145" src="https://www.youtube.com/embed/Ap62QNMmFuI?list=PLrNmXMVD0XDR6-LB2D57F3Xhq9r16lvDx" frameborder="0" allowfullscreen=></iframe>';
        // return(
        //     <Card>
        //         <Card.Body>
        //             <View style={{height:180, width: 280}}>
        //                 <WebView
        //                     style={{height:180, width: 280}}
        //                     source={{html: video}}
        //                     startInLoadingState={true}
        //                     scalesPageToFit={true}
        //                 />
        //                 <Text>TESTESTETETEST</Text>
        //             </View>
        //         </Card.Body>
        //     </Card>
        // );

        var video = '<iframe width="'+ data.width + '" height="' + data.height + '" src="' + data.url + '" frameborder="0" allowfullscreen=></iframe>';

        return (
            <Card key={key}>
                <Card.Body
                    style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                >
                    <View style={{height: data.height+30, width: data.width+20}}>
                        <WebView
                            style={{height: data.height+30, width: data.width+20}}
                            source={{html: video}}
                            startInLoadingState={true}
                            scalesPageToFit={true}
                        />
                        <Text>Watch the lecture video here!</Text>
                    </View>
                </Card.Body>
            </Card>
        );
    },

    _renderContent() {
        return this.props.data.content.map((content, index) => {
            switch(content.type) {
                case Content.WRITTEN:
                    return this._renderHyperText(content.data, index);
                case Content.IMAGE:
                    return this._renderImage(content.data, index);
                case Content.VIDEO:
                    return this._renderVideo(content.data, index);
                default:
                    return (<View key={index}/>);
            }
        });
    },

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1, paddingTop: 80, paddingBottom: 50}}>
                        <Card>
                            <Card.Media
                                image={<Image source={require('./images/welcome.jpg')}/>}
                                overlay
                            >
                                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>COS 126</Text>
                                <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Introduction to Computer Science</Text>
                            </Card.Media>
                            <Card.Body>
                                <Text>Need more resources?</Text>
                            </Card.Body>
                            <Button text="GO TO BOOKSITE" onPress={() => IntentAndroid.openURL('http://introcs.cs.princeton.edu/java/home/')}/>
                        </Card>
                        {this._renderContent()}
                        <Card>
                            <Card.Body>
                                <Text>Ready to take the quiz? Click the button!</Text>
                            </Card.Body>
                        </Card>
                        {/*this.props.data.quiz.length == 0 ? <View/> : <Button text="GO TO QUIZ" onPress={this._enterQuiz}/>*/}
                    </View>
                </ScrollView>
                {this.props.data.quiz.length == 0 ? <View/> :
                    (<ActionButton
                        buttonColor="rgba(231,76,60,1)"
                        onPress={this._enterQuiz}
                    />)
                }
                </View>
        );
    }
});
