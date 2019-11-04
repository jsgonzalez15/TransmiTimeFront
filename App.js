import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import ScreenMainView from './components/ScreenMainView';
import ScreenCultureView from './components/ScreenCultureView';
import ScreenStationView from './components/ScreenStationView';
import ScreenTimeView from './components/ScreenTimeView';
import ScreenSearchView from './components/ScreenSearchView';
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



class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenMainView/>
      </View>
    );
  }
}

class StationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenStationView/>
      </View>
    );
  }
}

class TimeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenTimeView/>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenSearchView/>
      </View>
    );
  }
}

class CultureScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenCultureView/>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  MAIN: MainScreen,
  STATION: StationScreen,
  SEARCH: SearchScreen,
  TIME: TimeScreen,
  CULTURE: CultureScreen
});

export default createAppContainer(RootStack);