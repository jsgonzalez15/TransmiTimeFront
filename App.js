import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import ScreenMainView from './components/ScreenMainView';
import ScreenCultureView from './components/ScreenCultureView';
import ScreenStationView from './components/ScreenStationView';
import ScreenTimeView from './components/ScreenTimeView';
import ScreenSearchView from './components/ScreenSearchView';

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

class App extends Component {
  render() {
    return (
      <View style={styles.fullScreen}>
        <View>
          <View>
            <Header title="1 Portal El dorado" subtitle="Universidades-vagón 2"/>
         </View>
          <ScreenMainView/>
        </View>
      </View>
    );
  }
}

export default App;

        /* 
        <View style={styles.container}>
        <View>
          <Header title="Universidades-vagón 2" subtitle="Ahora"/>
            <ScreenStationView/>
        </View>
        
        </View>

        <View style={styles.container}>
          <View>
          <Header title="Universidades-vagón 2" subtitle="Hoy"/>
          <ScreenTimeView/>
          </View>
        
        </View>

        <View style={styles.container}>
          <Header title="Cultura Transmilenio" subtitle=""/>
          <ScreenCultureView/>
        </View>

        <View style={styles.container}>
          <Header title="Buscar Ruta"/>
          <ScreenSearchView/>
        </View>
        */