import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
/*Custom Components import*/
import ScreenMainView from './components/ScreenMainView';
import ScreenCultureView from './components/ScreenCultureView';
import ScreenStationView from './components/ScreenStationView';
import ScreenTimeView from './components/ScreenTimeView';
import ScreenSearchView from './components/ScreenSearchView';
/*Navegation imports*/
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen :{
    height:'100%'
  }
});

/*const [currentScreen, setCurrentScreen] = useState('MAIN_VIEW');


let content = <ScreenMainView/>;

class App extends Component {
  render() {
    return (
      <View style={styles.fullScreen}>
          {content}
      </View>
    );
  }
}

export default App;*/

const RootStack = createStackNavigator({
  MAIN: ScreenMainView,
  STATION: ScreenStationView,
  SEARCH: ScreenSearchView,
  TIME: ScreenTimeView,
  CULTURE: ScreenCultureView
});

export default createAppContainer(RootStack);