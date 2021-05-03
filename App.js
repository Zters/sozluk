import React from 'react';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import Constants from './Src/Common/Constants';

import Main from './Src/Main';
import Disconnected from './Src/Screens/Disconnected/Disconnected';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    }
  }

  async componentDidMount() {
    try {
      Constants.SqlService.query(
        'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, wanted TEXT, process_type TEXT, time TEXT)',
      );
      const netInfo = await NetInfo.fetch();
      this.setState({ isConnected: netInfo.isConnected })
    } catch (error) {
      Alert.alert("Bir hata oluştu. Hata kodu: #1")
    }
  }

  reloadApp = async () => {
    await new Promise(resolve => {
      this.setState({}, () => resolve())
    })
  }

  reTryConnect = async () => {
    try {
      const netInfo = await NetInfo.fetch();
      this.setState({ isConnected: netInfo.isConnected })
      return netInfo.isConnected ? true : false;
    } catch (error) {
      Alert.alert("Bir hata oluştu. Hata kodu: #3")
    }
  }

  render() {
    return (
      <>
        <PaperProvider theme={DefaultTheme}>
          {this.state.isConnected
            ? <>
              <Main
                theme="light"
                ref={ref => this.navigator = ref}
                screenProps={{
                  reloadApp: async () => await this.reloadApp(),
                  reTryConnect: this.reTryConnect,
                  ...this.state
                }}
              />
            </>
            : <>
              <Disconnected
                screenProps={{
                  reloadApp: async () => await this.reloadApp(),
                  reTryConnect: this.reTryConnect,
                }} />
            </>}
        </PaperProvider>
      </>
    )
  }

}

export default App;