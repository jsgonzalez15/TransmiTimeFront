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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen :{
    flex:1
  }
});

class App extends Component {
  render() {
    return (
      <View>
        <View>
          <View>
            <Header title="1 Portal El dorado" subtitle="Universidades-vagón 2"/>
          <Text>1 Portal El dorado</Text>
          <Text>Universidades-vagón 2 (test para separar componentes en diferentes archivos)</Text>
        </View>
          <ScreenMainView/>
        </View>

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
      </View>
    );
  }
}

export default App;
