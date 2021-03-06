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

    async truncateTable() {
        try {
            const result = await Constants.SqlService.select('saved', '*');
            result.length != 0
                ? await Constants.SqlService.delete('saved', '*').then(result2 => {
                    this.componentDidMount();
                    ToastAndroid.show("Kayıtlı kelimeler silindi", ToastAndroid.SHORT)
                })
                : ToastAndroid.show("Kayıtlı kelime bulunamadı", ToastAndroid.SHORT)
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000g4", ToastAndroid.SHORT)
        }
    }

    render() {
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
                            <FontAwesome name="star" style={{ marginTop: -6, marginRight: 5, color: '#8D9299', alignSelf: 'center', fontSize: 20 }} />
                            <Text style={Style.savedText}>
                                Favori Kelimeler
                            </Text>
                            <TouchableOpacity onPress={() => this.truncateTable()} style={Style.savedButton}>
                                <Text style={Style.savedButtonText}>Listeyi Temizle</Text>
                                <FontAwesome name="trash" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20, marginLeft: 5 }} />

                            </TouchableOpacity>
                        </View>
                        <View style={Style.savedList}>
                            {this.state.saved.length != 0
                                ? this.state.saved.map((row, i) => {
                                    return (
                                        <List.Item
                                            key={i}
                                            title={row.word}
                                            description={row.description}
                                            left={props => <FontAwesome name="font" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }} />}
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