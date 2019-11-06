import React, { useState, Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import Header from './Header';
/*Firebase imports*/
import firebase from 'firebase';

const [acompañantes, setAcompañantes] = useState(0);

function aumentarAcompañantes() {
	if (acompañantes < 2) {
		setAcompañantes(acompañantes + 1)
	}
}

function disminuirAcompañantes() {
	if (acompañantes >= 1) {
		setAcompañantes(acompañantes - 1)
	}
}
class ScreenMainView extends Component {

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
		firebase.database().ref('Cultura').once('value', (CulturaObject) => {Culture=CulturaObject });
		// Objeto de usuarios por tiempo obtenidos siempre que sean actualizados
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/DatosRegresion').on('value', (PeopleObject) => {People=PeopleObject });
		// Número de personas actual obtenido siempre que sea actualizado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/Personas').on('value', (PeopleNowObject) => {PeopleNow=PeopleNowObject });
		// Tiempo de espera a partir de este momento para ingresar a bus deseado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoDePie').on('value', (TimeNowObject) => {TimeNow=TimeNowObject });
		// Tiempo de espera a partir de esete momento para ingresar a bus deseado en caso de ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoSentado').on('value', (TimeSitNowObject) => {TimeSitNow=TimeSitNowObject });
	}

	render() {
		return (
			<View>
				<View>
					<Header title="1 Portal El dorado" subtitle="Universidades-vagón 2" />
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('STATION')}>
					<View style={styles.usersNow}>
						<Text style={styles.subsubtitle}>Usuarios ahora:</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('TIME')}>
					<View style={styles.usersToday}>
						<Text style={styles.subsubtitle}>Usuarios hoy:</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.busesLeft}>
					<Text style={styles.subsubtitle}>Buses a esperar: {TimeNow} Si quieres ir sentado: {TimeSitNow}</Text> 
				</View>
				<View style={styles.companions}>
					<Text style={styles.subsubtitle}>¿Cuántas personas más van contigo? </Text>
					<View>
						<Text>{{ acompañantes }}</Text>
					</View>
					<View>
						<Button title='+' onPress={() => aumentarAcompañantes} />
						<Button title='-' onPress={() => disminuirAcompañantes} />
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
	subsubtitle: {
		fontSize: 18,
		fontFamily: 'serif'
	}
});

export default ScreenMainView;