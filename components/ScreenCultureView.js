import React, { Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Linking } from 'react-native';

class ScreenCultureView extends Component {

	static navigationOptions = {
		title: 'Cultura Transmilenio',
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#13990D',
		  },
	  };
	  
	constructor(props) {
		super(props);
		
	}
	//REVISAR COMO OBTENER UN ÚNICO CONSEJO DE consejos (test)
	//REVISAR ESTILO Y DISTRIBUCIÓN EN RENDERIZACIÓN
	render() {
	return (
    <View>
      <View>
        <Text>Consejo de hoy:</Text>
        <Text>{this.props.consejos[1]}</Text>
      </View>
      <View style={StyleSheet.goToHorizontal}>
        <Text> Visita la página de Transmilenio! </Text>
        <TouchableOpacity onPress={()=> Linking.openURL("https://www.transmilenio.gov.co")} >
          <Image style={styles.transmiPage} resizemode="contain" source={require('../assets/transmiLink.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=> Linking.openURL("https://www.transmilenio.gov.co/publicaciones/149132/manual-del-usuario")}>
        <View>
          <Image style={styles.manual} resizemode="contain" source={require('../assets/manualTransmi.png')} />
        </View>
      </TouchableOpacity>
      <View style={StyleSheet.goToHorizontal}>
        <Image source={require('../assets/lupaGreen.png')} />
        <Button title="¿Tienes Preguntas?" onPress={() => Linking.openURL("https://www.transmilenio.gov.co/preguntas-frecuentes/93/cultura/")} />
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
	manual: {
		width: '80%',
		height: '100%'
	},
	transmiPage: {
		width: '40%',
		height: '40%'
	},
	theText:{
		height: 60,
		fontSize: 18
	},
	goToHorizontal: {
		flexDirection: "row",
		fontSize: 18,
		alignItems:"flex-start",
		justifyContent:"flex-start"
	}
});

export default ScreenCultureView;