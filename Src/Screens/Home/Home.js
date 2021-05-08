import React from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Animated,
    ToastAndroid,
    LogBox
} from 'react-native';
import { Text, TextInput, Button, Searchbar, Card, Title, List, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../Common/Constants';
import Style from './Style';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            proposal: []
        }
    }

    UNSAFE_componentWillMount = () => {
        this.animatedWidth = new Animated.Value(50)
        this.animatedHeight = new Animated.Value(100)
    }


    componentDidMount() {
    }

    test(word) {
        try {
            word.length > 2
                ? (Constants.proposal(word).then(result => {
                    this.setState({ proposal: result })
                }), LogBox.ignoreLogs(['Animated: `useNativeDriver`']),
                    Animated.timing(this.animatedWidth, {
                        toValue: 400,
                        duration: 0,
                    }).start(),
                    Animated.timing(this.animatedHeight, {
                        toValue: 300,
                        duration: 500,
                    }).start(),
                    ToastAndroid.show("Arama başarılı.", ToastAndroid.SHORT))
                : this.setState({ proposal: [] })
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: #6", ToastAndroid.SHORT)
        }

    }

    render() {
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
        const SP = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={Style.container}>
                <ScrollView keyboardDismissMode="none" keyboardShouldPersistTaps="handled">
                    <View style={Style.formGroup}>
                        <Text style={Style.caption2}>Sözlük</Text>
                        <Searchbar
                            placeholder="Bir arama gerçekleştir..."
                            onChangeText={searchQuery => (this.setState({ searchQuery }), this.test(searchQuery))}
                            value={this.state.searchQuery}
                            style={Style.searchbar}
                            inputStyle={Style.searchbar}
                        />
                    </View>
                    <View style={Style.formGroup2}>
                        {this.state.proposal.length != 0
                            ? <>
                                <View style={Style.proposal}>
                                    <Animated.View style={[Style.box, animatedStyle]}>
                                        {this.state.proposal.map((row, i) => {
                                            return (
                                                i <= 4 ?
                                                    <TouchableOpacity key={i} onPress={() => navigate('WordDetail', {
                                                        word: row.madde,
                                                    })}>
                                                        <List.Item
                                                            title={row.madde}
                                                            left={props => <FontAwesome name="font" style={{ margin: 5, color: '#8D9299', alignSelf: 'center', fontSize: 20 }} />}
                                                            right={props => <FontAwesome name="chevron-circle-right" style={{ margin: 5, color: '#8D9299', alignSelf: 'flex-start', fontSize: 20, marginRight: 60 }} />}
                                                            titleStyle={Style.historyCard}
                                                        />
                                                    </TouchableOpacity>
                                                    : <List.Item
                                                        key={i}
                                                        style={{ opacity: 0 }}
                                                    />
                                            )
                                        })}
                                    </Animated.View>
                                </View>
                            </>
                            : <></>
                        }
                        <View style={Style.formGroup3}>
                            <FontAwesome name="history" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }} />
                            <Text style={Style.historyText}>
                                ARAMA GEÇMİŞİ
                            </Text>
                            <TouchableOpacity onPress={() => navigate('History')} style={Style.historyButton}>
                                <Text style={Style.historyButtonText}>Geçmişi Görüntüle</Text>
                            </TouchableOpacity>
                            <FontAwesome name="angle-right" style={{ color: '#8D9299', alignSelf: 'center', fontSize: 20 }} />
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
            </SafeAreaView >
        )
    }
}

export default Home;