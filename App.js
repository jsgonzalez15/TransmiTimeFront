import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Header } from './components/Header';
import { ScreenMainView} from './components/ScreenMainView';
import { ScreenCultureView} from './components/ScreenCultureView';
import { ScreenStationView} from './components/ScreenStationView';
import { ScreenTimeView} from './components/ScreenTimeView';
import { ScreenSearchView} from './components/ScreenSearchView';


export default function App() {
  return (
    <View>
      /*MAIN VIEW - make other views apearing displays*/
      <View style={styles.screen}>
        <View>
          <Header title="1 Portal El dorado" subtitle="Universidades-vagón 2"/>
         <Text>1 Portal El dorado</Text>
         <Text>Universidades-vagón 2 (test para separar componentes en diferentes archivos)</Text>
       </View>
        <ScreenMainView/>
      </View>

      /*STATION VIEW*/
      <View style={styles.container}>
       <View>
         <Header title="Universidades-vagón 2" subtitle="Ahora"/>
          <ScreenStationView/>
       </View>
      
      </View>

      /*TIME VIEW*/
      <View style={styles.container}>
        <View>
         <Header title="Universidades-vagón 2" subtitle="Hoy"/>
         <ScreenTimeView/>
        </View>
      
      </View>

      /*CULTURE VIEW*/
      <View style={styles.container}>
        <Header title="Cultura Transmilenio" subtitle=""/>
        <ScreenCultureView/>
      </View>

     /*SEARCH VIEW*/
      <View style={styles.container}>
        <Header title="Buscar Ruta"/>
        <ScreenSearchView/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
  screen :{
    flex:1
  }
});
