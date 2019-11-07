import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Linking, Image, ScrollView } from 'react-native';

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
		let advise = this.props.navigation.getParam('advise', []);
		return (
			<ScrollView >
				<View>
					<View >
						<Text style={styles.subsubtitle}>Consejo de hoy:</Text>
					</View>
					<View>
						<Text style={styles.subsubtitle}>{advise[Math.floor(Math.random() * advise.length)]}</Text>
					</View>
				</View>
				<View style={StyleSheet.goToHorizontal}>
					<View>
						<Text style={styles.subsubtitle}> Visita la página de Transmilenio! </Text>
					</View>
					<TouchableOpacity onPress={() => Linking.openURL("https://www.transmilenio.gov.co")} >
						<View>
							<Image style={styles.transmiPage} source={require('../assets/transmiLink.png')} />
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => Linking.openURL("https://www.transmilenio.gov.co/publicaciones/149132/manual-del-usuario/")}>
					<View>
						<Image style={styles.manual} resizemode="contain" source={require('../assets/manualTransmi.png')} />
					</View>
				</TouchableOpacity>
				<View style={StyleSheet.goToHorizontal}>
					<Image source={require('../assets/lupaGreen.png')} />
					<Button title="¿Tienes Preguntas?" onPress={() => Linking.openURL("https://www.transmilenio.gov.co/preguntas-frecuentes/93/cultura/")} />
				</View>
			</ScrollView>);
	}
}

const styles = StyleSheet.create({
	manual: {
		width: '80%',
		height: '100%'
	},
	transmiPage: {
		width: 70,
		height: 70
	},
	theText: {
		height: 60,
		fontSize: 18
	},
	goToHorizontal: {
		flexDirection: "row",
		fontSize: 18,
		alignItems: "flex-start",
		justifyContent: "flex-start"
	},
	fullScreen: {
		flexDirection: "column",
		alignSelf: "stretch",
	},
	subsubtitle: {
		fontSize: 18,
		fontFamily: 'serif'
	},
});

export default ScreenCultureView;