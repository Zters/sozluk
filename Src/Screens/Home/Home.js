import React from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Text, TextInput, Button, Searchbar, Card, Title, List, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    render() {
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={Style.container}>
                <ScrollView keyboardDismissMode="none" keyboardShouldPersistTaps="handled">
                    <View style={Style.formGroup}>
                        <Text style={Style.caption2}>Sözlük</Text>
                        <Searchbar
                            placeholder="Bir arama gerçekleştir..."
                            onChangeText={searchQuery => this.setState({ searchQuery })}
                            value={this.state.searchQuery}
                            style={Style.searchbar}
                            inputStyle={Style.searchbar}
                        />
                    </View>
                    <View style={Style.formGroup2}>
                        <View style={Style.formGroup3}>
                            <FontAwesome name="history" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                            <Text style={Style.historyText}>
                                ARAMA GEÇMİŞİ
                            </Text>
                            <TouchableOpacity onPress={() => navigate('History')} style={Style.historyButton}>
                                <Text style={Style.historyButtonText}>Geçmişi Görüntüle</Text>
                            </TouchableOpacity>
                            <FontAwesome name="angle-right" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                        </View>
                        <View style={Style.historyList}>
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                                titleStyle={Style.historyCard}
                                descriptionStyle={Style.historyCard2}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                                titleStyle={Style.historyCard}
                                descriptionStyle={Style.historyCard2}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                                titleStyle={Style.historyCard}
                                descriptionStyle={Style.historyCard2}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                                titleStyle={Style.historyCard}
                                descriptionStyle={Style.historyCard2}
                            />
                        </View>
                        <View>
                            <Text style={Style.randomWordText}>RASTGELE KELİME</Text>
                            <Card style={Style.randomWordCard2}>
                                <Card.Content>
                                    <Title style={Style.cardTitle}>Koşu</Title>
                                    <Paragraph style={Style.cardParagraph}>"Benim oğlanın göbeği çıkıyormuş da biraz, her sabah koşu yapıyor, dedi." - Nazım Hikmet</Paragraph>
                                </Card.Content>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home;