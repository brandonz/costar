import React from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Scene from './scene.js';

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#00BCD4',
        flexDirection: 'column'
    },
    navBarText: {
        fontSize: 28,
        marginVertical: 12,
        color: '#DEF6F9',
        textAlign: 'center',
        flexDirection: 'column'
    },
    navBarTitleText: {
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 18
    },
    navBarLeftButton: {
        paddingLeft: 20
    },

    home: {
        fontSize: 28,
        paddingLeft: 80
    },

    page: {
        marginVertical: 15
    }
});

const NavigationBarRouteMapper = {
    LeftButton: (route, navigator) => {
        if (route.id === Scene.HOME) {
            return null;
        }

        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}
            >
                {/*<Text style={[styles.navBarText]}>
                    Back
                </Text>*/}
                <Icon name="md-arrow-back" style={[styles.navBarText]} />
            </TouchableOpacity>
        );
    },

    RightButton: () => {
        return null;
    },

    Title: (route) => {
        if (route.id === Scene.HOME) {
            return (
                <Text style={[styles.navBarText, styles.navBarTitleText, styles.home]}>
                    {route.title}
                </Text>
            );
        }

        return (
            <Text style={[styles.navBarText, styles.navBarTitleText, styles.page]}>
                {route.title}
            </Text>
        );
    }
};

export default (
    <Navigator.NavigationBar
        style={styles.navBar}
        routeMapper={NavigationBarRouteMapper}
    />
);