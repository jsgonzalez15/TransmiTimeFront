import React, { Component } from 'react';
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
			culture: null,
			buses: null,
			busesSit: null,
			adviseStation: null
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
		firebase.database().ref('Cultura/Consejos').once('value', (CulturaObject) => {
			this.setState({
				culture: Object.keys(CulturaObject)
			});   
		});
		firebase.database().ref('Cultura/Vagón').once('value', (AdviseStationObject) => {
			this.setState({
				adviseStation: Object.keys(AdviseStationObject)
			});   
		});
		// Objeto de usuarios por tiempo obtenidos siempre que sean actualizados
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/DatosRegresion').on('value', (PeopleObject) => {
			this.setState({
				people: Object.keys(PeopleObject)
			});
		});
		// Número de personas actual obtenido siempre que sea actualizado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/Personas').on('value', (PeopleNowObject) => {
			this.setState({
				peopleNow: Object.keys(PeopleNowObject)
			});
		});
		// Tiempo de espera a partir de este momento para ingresar a bus deseado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoDePie').on('value', (TimeNowObject) => {
			this.setState({
				timeNow: Object.keys(TimeNowObject)
			});
		});
		// Tiempo de espera a partir de esete momento para ingresar a bus deseado en caso de ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoSentado').on('value', (TimeSitNowObject) => {
			this.setState({
				timeSitNow: Object.keys(TimeSitNowObject)
			});
		});
		// Buses a esperar a partir de este momento
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/BusesDePie').on('value', (BusesNowObject) => {
			this.setState({
				buses: Object.keys(BusesNowObject)
			});
		});
		// Buses a esperar a partir de este momento si se desea ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/BusesSentado').on('value', (BusesSitNowObject) => {
			this.setState({
				busesSit: Object.keys(BusesSitNowObject)
			});
		});
	}

	//FALTA AVERIGUAR COMO MOSTRAR LA BARRA DE USUARIOS AHORA SEGÚN usersNow
	render() {
		return (
			<View>
				<View>
					<Button title='Cultura Transmilenio' onPress={() => this.props.navigation.navigate('CULTURE', { advise: adviseStation})}/>
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('STATION', { advise: culture, peopleNowDoor3: peopleNow })}>
					<View style={styles.usersNow}>
						<Text style={styles.subsubtitle}>Usuarios ahora: {this.props.usersNow}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('TIME', { peopleVector: people, })}>
					<View style={styles.usersToday}>
						<Text style={styles.subsubtitle}>Usuarios hoy:</Text>
						<AreaChart
							style={{ height: 50 }}
							data={this.props.peopleVector} //el ejemplo es con data
							contentInset={{ top: 30, bottom: 30 }}
							curve={shape.curveNatural}
							svg={{ fill: '#E56723' }}
						>
							<Grid />
						</AreaChart>
					</View>
				</TouchableOpacity>
				<View style={styles.busesLeft}>
					<Text style={styles.subsubtitle}>Buses a esperar:</Text>
					<View>
						<Image style={styles.busImage} resizemode="contain" source={require('../assets/bus.png')} />
						<View>
							<Text>{buses} buses</Text>
							<Text>250 usuarios</Text>
						</View>
					</View>
					<View>
						<Image style={styles.busImage} resizemode="contain" source={require('../assets/clock.png')} />
						<Text>{timeNow} +/- 2min </Text>
						<Text> Si quieres ir sentado: {TimeSitNow} +/- 3min y {busesSit} buses</Text>
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