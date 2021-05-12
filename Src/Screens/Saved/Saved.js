import React from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import { Text, TextInput, Button, Searchbar, Card, Title, List, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../Common/Constants';
import Style from './Style';
import { withNavigationFocus } from 'react-navigation';

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: []
        }
    }

    componentDidMount() {
        try {
            Constants.SqlService.select('saved', '*').then(result => {
                this.setState({ saved: result })
            })
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000e3", ToastAndroid.SHORT)
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            this.componentDidMount();
        }
    }

    truncateTable() {
        try {
            Constants.SqlService.select('saved', '*').then(result => {
                result.length != 0
                    ?
                    Constants.SqlService.delete('saved', '*').then(result2 => {
                        console.log("Kayıtlı kelimeler silindi.");
                    })
                    : console.log("Kayıtlı kelime bulunamadı.");
            })
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000g4", ToastAndroid.SHORT)
        }
    }

    instertsavedTable() {
        try {
            const getDate = () => {
                var date = new Date().getDate();
                var month = new Date().getMonth() + 1;
                var year = new Date().getFullYear();
                var hours = new Date().getHours();
                var min = new Date().getMinutes();
                return hours + ':' + min + ' | ' + date + '/' + month + '/' + year;
            }
            Constants.SqlService.insert('saved', ['word', 'description', 'time'], ['Kelime', 'Açıklama', getDate()]);

            Constants.SqlService.select('saved', '*').then(result => {
                console.log(result);
            })
            this.componentDidMount();
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000f5", ToastAndroid.SHORT)
        }
    }

    render() {
        console.log(this.state.saved);
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
                            <Text style={Style.savedText}>
                                Favori Kelimeler
                            </Text>
                            <TouchableOpacity onPress={() => this.truncateTable()} style={Style.savedButton}>
                                <Text style={Style.savedButtonText}>Listeyi Temizle</Text>
                            </TouchableOpacity>
                            <FontAwesome name="trash" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                        </View>
                        <View style={Style.savedList}>
                            {this.state.saved.length != 0
                                ? this.state.saved.map((row, i) => {
                                    return (
                                        <List.Item
                                            key={i}
                                            title={row.wanted}
                                            description={row.process_type}
                                            left={props => <List.Icon {...props} icon="folder" />}
                                            style={Style.savedCard}
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

export default withNavigationFocus(Saved);