import React from 'react';
import {
    SafeAreaView,
    View,
    ToastAndroid,
} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Constants from '../../Common/Constants';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    ShineOverlay
} from "rn-placeholder";
import Style from './Style';

class WordDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            result: "",
            error: false,
            visible: false
        }
    }

    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack();
    }

    componentDidMount() {
        try {
            const { word } = this.props.navigation.state.params;
            word.length > 0
                ? Constants.wMQuery(word).then(res => {
                    res.status == "success"
                        ? this.setState({ word: word, result: res.result, visible: true })
                        : this.setState({ word: word, result: res.result, error: true, visible: true })
                })
                : console.log("Kelime bulunamadı, servise de istek atılmadı.")
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000f6", ToastAndroid.SHORT)
        }
    }

    render() {
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={[Style.container]}>
                {this.state.visible
                    ?
                    !this.state.error
                        ? <>
                            <View style={Style.formGroup}>
                                <Text style={Style.caption2}>Aranan: {this.state.word}</Text>
                                <Text style={Style.caption2}>Anlamı: {this.state.result}</Text>
                            </View>
                        </>
                        : <>
                            <View style={Style.formGroup}>
                                <Text style={Style.caption2}>Bir hata oluştu veya kelime doğru değil.</Text>
                                <Text style={Style.caption2}>{this.state.result}</Text>
                            </View>
                        </>
                    : <>
                        <Placeholder Animation={ShineOverlay}>
                            <PlaceholderLine style={{ backgroundColor: 'red' }} width={50} />
                        </Placeholder>
                    </>
                }
            </SafeAreaView>
        )
    }
}

export default WordDetail;