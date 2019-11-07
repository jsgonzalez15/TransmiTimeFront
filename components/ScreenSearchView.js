import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

/*Find out how to make touchable arrays*/
class ScreenSearchView extends Components {

  static navigationOptions = {
    title: 'Buscar Ruta',
    headerStyle: {
      backgroundColor: '#ed760e',
    },
    headerTintColor: '#fff',
    };
    
    render() {<View>
        <View>
        <Image style={styles.transmiMap} resizemode="contain" source={require('../assets/transmiMap.png')} />
        </View>
        <View>
          <Text>Tus rutas favoritas:</Text>
          <Text>1 Portal el dorado-Universidades vagón 2</Text>
        </View>
    </View>}
};

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
    width: '50%',
    height: '100%'
},
});

export default ScreenSearchView;