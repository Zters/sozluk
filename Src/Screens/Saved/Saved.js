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

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        try {
            Constants.SqlService.select('history', '*').then(result => {
                this.setState({ history: result })
            })
        } catch (error) {
            console.log("Hata kodu: 1");
        }
    }

    truncateTable() {
        try {
            Constants.SqlService.select('history', '*').then(result => {
                result.length != 0
                    ?
                    Constants.SqlService.delete('history', '*').then(result2 => {
                        console.log("Kayıtlı kelimeler silindi.");
                    })
                    : console.log("Kayıtlı kelime bulunamadı.");
            })
        } catch (error) {
            console.log("Hata kodu: 2");
        }
    }

    instertHistoryTable() {
        try {
            const getDate = () => {
                var date = new Date().getDate();
                var month = new Date().getMonth() + 1;
                var year = new Date().getFullYear();
                var hours = new Date().getHours();
                var min = new Date().getMinutes();
                return hours + ':' + min + ' | ' + date + '/' + month + '/' + year;
            }
            Constants.SqlService.insert('history', ['wanted', 'process_type', 'time'], ['Aranan', 'İşlem Tipi', getDate()]);

            Constants.SqlService.select('history', '*').then(result => {
                console.log(result);
            })
            this.componentDidMount();
        } catch (error) {
            console.log("Hata kodu: 3");
        }
    }

    render() {
        console.log(this.state.history);
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={Style.container}>
                <ScrollView style={Style.scrollView} keyboardDismissMode="none" keyboardShouldPersistTaps="handled">
                    <View style={Style.formGroup}>
                        <Text style={Style.caption2}>Kayıtlı Kelimeler</Text>
                    </View>
                    <View style={Style.formGroup2}>
                        <View style={Style.formGroup3}>
                            <FontAwesome name="star" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                            <Text style={Style.historyText}>
                                Favori Kelimeler
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
                                    <Text style={Style.notFoundText}>Kayıtlı Kelime Bulunamadı.</Text>
                                </View>}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Saved;