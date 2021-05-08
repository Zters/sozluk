import { StyleSheet } from 'react-native'
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
        height: 170,
        alignSelf: 'center',
        backgroundColor: '#EC6E6E',
        borderBottomLeftRadius: 50
    },
    formGroup2: {
        width: '100%',
        borderTopEndRadius: 30,
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
        fontFamily: Constants.Bold,
        fontSize: 18
    },
    historyCard2: {
        fontSize: 16,
        fontFamily: Constants.Medium,
        marginBottom: 5,
        borderBottomColor: '#E1E4EB',
        borderBottomWidth: 1,
    },
    historyList: {
        backgroundColor: '#E8EBF2',
        borderRadius: 20,
        margin: 5,
        width: '100%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 10,
        marginTop: 20
    },
    searchbar: {
        width: '85%',
        height: 60,
        borderRadius: 20,
        alignSelf: 'center',
        fontFamily: Constants.Bold
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
    randomWordText: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: Constants.Bold
    },
    randomWordCard2: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 10
    },
    cardTitle: {
        fontFamily: Constants.Bold,
        fontSize: 22
    },
    cardParagraph: {
        fontFamily: Constants.Italic,
        fontSize: 16
    },
    proposal: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#E8EBF2',
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 10,
        marginTop: 25
    },
    box: {
        width: 50,
        height: 50
    }
})