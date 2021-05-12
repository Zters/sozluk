import React from 'react';
import { SafeAreaView, View, Alert, ToastAndroid } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Feather';
import Style from './Style';

class Disconnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    reTryConnect = async () => {
        try {
            const SP = this.props.screenProps;
            const result = await SP.reTryConnect();
            !result ? Alert.alert("Lütfen internet bağlantınızı kontrol edin.") : ""
        } catch (error) {
            ToastAndroid.show("Bir hata oluştu. Hata kodu: S000s2", ToastAndroid.SHORT)
        }
    }

    render() {
        const SP = this.props.screenProps;
        return (
            <>
                <SafeAreaView style={Style.container}>
                    <View style={Style.formGroup}>
                        <Text style={Style.description}>İnternet bağlantınız yok!</Text>
                        <Icon name="wifi-off" size={70} color="black" style={Style.wifiIcon} />
                        <Button icon="reload" mode="outlined" onPress={() => this.reTryConnect()} color="black" style={[Style.reTryConnectionBtn, { backgroundColor: "red", color: "white" }]}><Text style={{ color: "white" }}>Yeniden Dene</Text></Button>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}

export default Disconnected;