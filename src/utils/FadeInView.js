import React from 'react';
import {
    Animated
} from 'react-native';

const FadeInView = React.createClass({
   getInitialState() {
       return {
           fadeAnim: new Animated.Value(0.0)
       }
   },

    componentDidMount() {
        const { delay } = this.props;

        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            delay: delay,
            duration: 1000
        }).start();
    },

    render() {
        return (
            <Animated.View
                style={{opacity: this.state.fadeAnim}}
            >
                {this.props.children}
            </Animated.View>
        );
    }
});

export default FadeInView;