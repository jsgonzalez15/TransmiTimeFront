import React, { useState, Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import Header from './Header';
/*Firebase imports*/
import firebase from 'firebase';


class ScreenMainView extends Component {

	static navigationOptions = {
		title: '1 Portal El dorado, Universidades-vagón 2',
		headerStyle: {
			backgroundColor: '#ed760e',
		},
		headerTintColor: '#fff',
	};

	constructor(props) {
		super(props);
		this.state = {
			people: null,
			time: null,
			peopleTime: null,
			timeSitNow: null,
			culture: null
		};
	}

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
		firebase.database().ref('Cultura').once('value', (CulturaObject) => { this.state.culture = CulturaObject });
		// Objeto de usuarios por tiempo obtenidos siempre que sean actualizados
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/DatosRegresion').on('value', (PeopleObject) => {
			this.setState({
				people: PeopleObject
			});
		});
		// Número de personas actual obtenido siempre que sea actualizado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/Personas').on('value', (PeopleNowObject) => {
			this.setState({
				peopleNow: PeopleNowObject
			});
		});
		// Tiempo de espera a partir de este momento para ingresar a bus deseado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoDePie').on('value', (TimeNowObject) => {
			this.setState({
				timeNow: TimeNowObject
			});
		});
		// Tiempo de espera a partir de esete momento para ingresar a bus deseado en caso de ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoSentado').on('value', (TimeSitNowObject) => {
			this.setState({
				timeSitNow: TimeSitNowObject
			});
		});
	}

	//FALTA AGREGAR BOTÓN DE CULTURA (ESTÁ ENTRE VIEWS)
	//FALTA AVERIGUAR COMO MOSTRAR LA BARRA DE USUARIOS AHORA SEGÚN usersNow
	//FALTA AVERIGUAR COMO MOSTRAR UN DISPLAY REDUCIDO EN TAMAÑO PARA VECTOR people
	//ROBERTH CREARÁ UN NÚMERO DE BUSES A ESPERAR QUE TODAVÍA NO ESTÁ EN FIREBASE
	render() {
		return (
			<View>
				<View>
					<Header title="1 Portal El dorado" subtitle="Universidades-vagón 2" />
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('STATION', { advise: culture, peopleNowDoor3:peopleNow})}>
					<View style={styles.usersNow}>
						<Text style={styles.subsubtitle}>Usuarios ahora: {this.props.usersNow}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('TIME', { peopleVector: people, })}>
					<View style={styles.usersToday}>
						<Text style={styles.subsubtitle}>Usuarios hoy: IMAGE</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.busesLeft}>
					<Text style={styles.subsubtitle}>Buses a esperar:</Text>
					<View>
						<Image style={styles.busImage} resizemode="contain" source={require('../assets/bus.png')} />
						<View>
							<Text>x buses</Text>
							<Text>250 usuarios</Text>
						</View>
					</View>
					<View>
						<Image style={styles.busImage} resizemode="contain" source={require('../assets/clock.png')} />
						<Text>{timeNow} +/- 2min </Text>
						<Text> Si quieres ir sentado: {TimeSitNow} +/- 3min</Text>
					</View>
				</View>
				<View style={styles.searchService}>
					<Button title='Buscar servicio en Mapa' onPress={() => this.props.navigation.navigate('SEARCH')} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	usersNow: {
		height: 60,
		fontSize: 18,
		paddingTop: 10
	},
	usersToday: {
		height: 80,
		fontSize: 18,
		paddingVertical: 40
	},
	busesLeft: {
		height: 80,
		fontSize: 18,
		paddingEnd: 10
	},
	companions: {
		fontSize: 18,
		height: 80,
		flexDirection: "column"
	},
	searchService: {
		fontSize: 18,
		height: 40,
		paddingVertical: 5
	},
	busImage: {
		width: '50%',
		height: '100%'
	},
	subsubtitle: {
		fontSize: 18,
		fontFamily: 'serif'
	}
});

export default ScreenMainView;