import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Header } from './components/Header';
import { ScreenMainView} from './components/ScreenMainView';

export default function App() {
  return (
    <View>
    /*MAIN VIEW*/
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
        <Text>Universidades-vagón 2</Text>
        <Text>Ahora</Text>
      </View>
      <View>
        <Text>Here goes interactive picture</Text>
      </View>
      <View>
        <Text>Here goes conventions</Text>
      </View>
      <View>
        <Text>Here goes advise based on time trend</Text>
      </View>
    </View>

    /*TIME VIEW*/
    <View style={styles.container}>
      <View>
        <Text>Universidades-vagón 2</Text>
        <Text>Hoy</Text>
      </View>
      <View>
        <Text>Here goes time display</Text>
      </View>
      
    </View>

    /*CULTURE VIEW*/
    <View style={styles.container}>
      <View>
        <Text>Cultura Transmilenio</Text>
      </View>
      <View>
        <Text>Consejo de hoy:</Text>
        <Text>Here goes received advise</Text>
      </View>
      <View>
        <Button title='Visita la página de Transmilenio!' /*onPress={()=> openTransmilenioPage}*//>
      </View>
      <TouchableOpacity /*onPress={openLinkManual}*/></TouchableOpacity>
      <View>
        <Text>Here goes image and link to manual</Text>
      </View>
      <View>
        <Button title="¿Tienes Preguntas?" /*onPress={() => openCultureLink1}*//>
      </View>
    </View>

    /*SEARCH VIEW*/
    <View style={styles.container}>
      <View>
        <Text>Buscar Ruta</Text>
      </View>
      <View>
        <Text>Here goes interactive and expandable map</Text>
      </View>
      <View>
        <Text>Tus rutas favoritas:</Text>
        <Text>Here goes favorite list</Text>
      </View>
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
