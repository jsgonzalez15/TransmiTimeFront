import React, { Component}  from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

/*Find out how to make touchable arrays*/
class ScreenSearchView extends Component {

  static navigationOptions = {
    title: 'Buscar Ruta',
    headerStyle: {
      backgroundColor: '#ed760e',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (<ScrollView style={StyleSheet.fullScreen}>
      <View>
      <Image style={styles.transmiMap} resizemode="contain" source={require('../assets/transmiMap.png')} />
      </View>
      <View>
        <Text>Tus rutas favoritas:</Text>
        <Text>1 Portal el dorado-Universidades vagón 2</Text>
      </View>
    </ScrollView>);
  }
}

const styles = StyleSheet.create({
   parrafo:{
    height: 60,
    fontSize: 18,
    backgroundColor:'#ed760e',
    paddingTop: 10,
    alignItems:"flex-start",
    justifyContent:"flex-start"
   },
   transmiMap: {
    width: 400,
    height: 200
  },
  fullScreen: {
		flexDirection: "column",
		alignSelf: "stretch",
	}
});

export default ScreenSearchView;