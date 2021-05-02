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
            <View style={Style.container}>
                <ScrollView style={Style.scrollView} keyboardDismissMode="none" keyboardShouldPersistTaps="handled">
                    <View style={Style.formGroup}>
                        <Text style={Style.caption2}>Sözlük</Text>
                        <Searchbar
                            placeholder="Bir arama gerçekleştir..."
                            onChangeText={searchQuery => this.setState({ searchQuery })}
                            value={this.state.searchQuery}
                            style={Style.searchbar}
                        />
                    </View>
                    <View style={Style.formGroup2}>
                        <View style={Style.formGroup3}>
                            <FontAwesome name="history" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                            <Text style={Style.historyText}>
                                ARAMA GEÇMİŞİ
                            </Text>
                            <TouchableOpacity onPress={() => console.log("tıklandı")} style={Style.historyButton}>
                                <Text style={Style.historyButtonText}>Arama Geçmişi</Text>
                            </TouchableOpacity>
                            <FontAwesome name="angle-right" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }}> </FontAwesome>
                        </View>
                        <View style={Style.historyList}>
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                            />
                            <List.Item
                                title="İşlemci"
                                description="Hesaplamada, bir işlemci veya işlem birimi, bazı harici..."
                                left={props => <List.Icon {...props} icon="folder" />}
                                style={Style.historyCard}
                            />
                        </View>
                        <View style={Style.randomWordCard}>
                            <Text style={Style.randomWordText}>RASTGELE KELİME</Text>
                            <Card>
                                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                                <Card.Content>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Title>Card title</Title>
                                    <Paragraph>Card content</Paragraph>
                                </Card.Content>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home;