import React from 'react';
import {
    SafeAreaView,
    View,
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
            console.log("Bir hata oluştu.");
        }
    }

    render() {
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        console.log(this.state.error);
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
                        <Placeholder Animation={ShineOverlay} style={{backgroundColor: 'red', width: 50}}>
                            <PlaceholderLine />
                        </Placeholder>
                    </>
                }
            </SafeAreaView>
        )
    }
}

export default WordDetail;