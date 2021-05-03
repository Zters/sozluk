import React from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Constants from '../../Common/Constants';
import Style from './Style';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(Constants);
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={[Style.container]}>
                <View style={Style.formGroup}>
                    <Text style={Style.caption2}>Sözlük Uygulaması</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Name;