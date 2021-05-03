import { StyleSheet } from 'react-native'
import { ThemeColors } from 'react-navigation'
import Constants from '../../Common/Constants'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    caption2: {
        alignSelf: 'center',
        fontSize: 21,
        margin: '5%',
        color: 'white',
        fontFamily: Constants.Bold
    },
    formGroup: {
        width: '100%',
        height: 90,
        alignSelf: 'center',
        backgroundColor: '#EC6E6E',
    },
    formGroup2: {
        width: '100%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: -15,
        padding: 20
    },
    formGroup3: {
        flexDirection: 'row'
    },
    historyCard: {
        borderRadius: 15,
        backgroundColor: 'transparent',
        marginTop: 10,
        width: '100%',
        borderBottomColor: '#E1E4EB',
        borderBottomWidth: 1,
    },
    historyButton: {
        marginLeft: 110,
        marginRight: 10
    },
    historyText: {
        color: '#8D9299',
        fontFamily: Constants.Bold
    },
    historyButtonText: {
        color: '#8D9299',
        fontFamily: Constants.Bold

    },
    notFoundText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20,
        fontFamily: Constants.Light
    }
})