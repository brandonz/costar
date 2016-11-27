import {
    StyleSheet,
    Platform
} from 'react-native';

const HEADER_HEIGHT = 150;
const NAVBAR_HEIGHT = 50;
const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    },
    row: {
        padding: 20,
        margin: 0,
        backgroundColor: '#eee'
    },
    fill: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Platform.OS === 'android' ? 24 : 26
    },
    image: {
        height: HEADER_HEIGHT,
        width: 420
    },
    header: {
        overflow: 'hidden',
        position: 'absolute',
        top: -HEADER_HEIGHT - HEADER_HEIGHT,
        left: 0,
        right: 0,
        backgroundColor: '#008ca6',
        height: HEADER_HEIGHT + HEADER_HEIGHT + HEADER_HEIGHT + 20,
        paddingTop: HEADER_HEIGHT + HEADER_HEIGHT + 20
    },
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: NAVBAR_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center'
    },
    navbarBackground: {
        backgroundColor: '#008ca6',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    content: {
        backgroundColor: '#fff',
        paddingTop: HEADER_HEIGHT
    },
    name: {
        backgroundColor: 'transparent',
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        width: 20,
        height: 20,
        marginLeft: 16,
        tintColor: 'white'
    },
    rightButton: {
        width: 20,
        height: 20,
        marginRight: 16
    },
    titleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    }
});

export default styles;