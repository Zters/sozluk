import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
    },
    caption2: {
        alignSelf: 'center',
        fontSize: 21,
        margin: '5%',
        color: 'white',
        fontWeight: 'bold'
    },
    formGroup: {
        width: '100%',
        height: 170,
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
    historyList: {
        backgroundColor: '#E8EBF2',
        borderRadius: 30,
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
    },
    historyButton: {
        marginLeft: 110,
        marginRight: 10
    },
    historyText: {
        color: '#8D9299',
    },
    historyButtonText: {
        color: '#8D9299',
        fontWeight: 'bold'
    },
    randomWordText: {
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    randomWordCard: {
    }
})