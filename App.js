import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
/*Custom Components import*/
import Header from './components/Header';
import ScreenMainView from './components/ScreenMainView';
import ScreenCultureView from './components/ScreenCultureView';
import ScreenStationView from './components/ScreenStationView';
import ScreenTimeView from './components/ScreenTimeView';
import ScreenSearchView from './components/ScreenSearchView';
/*Navegation imports*/
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
/*Firebase imports*/
import firebase from 'firebase';

componentWillMount() {
  var firebaseConfig = {
    apiKey: "AIzaSyA9HOqxXdnE3bA9GYYk4aN4Wt_dkjGSkco",
    authDomain: "basedatosprueba1.firebaseapp.com",
    databaseURL: "https://basedatosprueba1.firebaseio.com",
    projectId: "basedatosprueba1",
    storageBucket: "basedatosprueba1.appspot.com",
    messagingSenderId: "174995287278",
    appId: "1:174995287278:web:16e61d006ef90aac5757ff",
    measurementId: "G-F1WPHNHSHY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Mensajes de cultura y consejos en vagón obtenidos solo al iniciar la aplicación
  firebase.database().ref('Cultura').once('value',(CulturaObject)=>{});
  // Objeto de usuarios por tiempo obtenidos siempre que sean actualizados
  firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/DatosRegresion').on('value',(PeopleObject)=>{});
  // Número de personas actual obtenido siempre que sea actualizado
  firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/Personas').on('value',(PeopleNowObject)=>{});
}
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