import React from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';
import Scene from './scene.js';

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#00BCD4'
    },
    navBarText: {
        fontSize: 20,
        marginVertical: 12,
        color: '#DEF6F9'
    },
    navBarTitleText: {
        fontWeight: '500',
        marginVertical: 12
    },
    navBarLeftButton: {
        paddingLeft: 5
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
                <Text style={[styles.navBarText]}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: () => {
        return null;
    },

    Title: (route) => {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
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