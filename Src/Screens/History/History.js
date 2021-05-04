import React from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Text, TextInput, Button, Searchbar, Card, Title, List, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../Common/Constants';
import Style from './Style';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        try {
            Constants.SqlService.select('history', '*').then(res => {
                this.setState({
                    history: res,
                });
            });
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: #5", ToastAndroid.SHORT)
        }
    }

    truncateTable() {
        try {
            Constants.SqlService.select('history', '*').then(res => {
                res.length != 0
                    ? (Constants.SqlService.delete('history', '*'), this.componentDidMount(), ToastAndroid.show("Kayıtlar başarıyla silindi.", ToastAndroid.SHORT))
                    : ToastAndroid.show("Silinebilir kayıt yok.", ToastAndroid.SHORT)
            });
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: #8", ToastAndroid.SHORT)
        }
    }

    render() {
        const process_arr = { "name": "İsim", "word": "Sözcük" };
        const SP = this.props.screenProps;
        return (
            <SafeAreaView style={Style.container}>
            <ScrollView style={Style.scrollView} keyboardDismissMode="none" keyboardShouldPersistTaps="handled">
                <View style={Style.formGroup}>
                    <Text style={Style.caption2}>Arama Geçmişi</Text>
                </View>
                <View style={Style.formGroup2}>
                    <View style={Style.formGroup3}>
                        <FontAwesome name="history" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                        <Text style={Style.historyText}>
                            Arama Geçmişini
                        </Text>
                        <TouchableOpacity onPress={() => this.truncateTable()} style={Style.historyButton}>
                            <Text style={Style.historyButtonText}>Listeyi Temizle</Text>
                        </TouchableOpacity>
                        <FontAwesome name="trash" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                    </View>
                    <View style={Style.historyList}>
                        {this.state.history.length != 0
                            ? this.state.history.map((row, i) => {
                                return (
                                    <List.Item
                                        key={i}
                                        title={row.wanted}
                                        description={row.process_type}
                                        left={props => <List.Icon {...props} icon="folder" />}
                                        style={Style.historyCard}
                                    />
                                )
                            })
                            : <View>
                                <Text style={Style.notFoundText}>Arama Geçmişi Bulunamadı.</Text>
                            </View>}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

export default History;