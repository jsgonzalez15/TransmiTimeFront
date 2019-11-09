import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape'
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
			peopleNow: null,
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
			//console.log(CulturaObject.node_);
			let data = [];
			CulturaObject.forEach(item => {
				data.push(item.node_.value_);
			});
			console.log(data);
			this.setState({
				culture: data
			});
		});
		firebase.database().ref('Cultura/Vagón').once('value', (AdviseStationObject) => {
			//console.log(AdviseStationObject.node_);
			let data = [];
			AdviseStationObject.forEach(item => {
				data.push(item.node_.value_);
			});
			console.log(data);
			this.setState({
				adviseStation: data
			});
		});
		// Objeto de usuarios por tiempo obtenidos siempre que sean actualizados
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/DatosRegresion').on('value', (PeopleObject) => {
			console.log("prueba");
			let data = [];
			PeopleObject.forEach(item => {
				data.push(item.node_.value_);
			});
			this.setState({
				people: data
			});
		});
		// Número de personas actual obtenido siempre que sea actualizado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/Personas').on('value', (PeopleNowObject) => {
			console.log(PeopleNowObject.node_.value_);
			this.setState({
				peopleNow: PeopleNowObject.node_.value_
			});
		});
		// Tiempo de espera a partir de este momento para ingresar a bus deseado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoDePie').on('value', (TimeNowObject) => {
			console.log(TimeNowObject.node_.value_);
			this.setState({
				timeNow: Math.round(TimeNowObject.node_.value_/60)
			});
		});
		// Tiempo de espera a partir de esete momento para ingresar a bus deseado en caso de ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/TiempoSentado').on('value', (TimeSitNowObject) => {
			console.log(TimeSitNowObject);
			this.setState({
				timeSitNow: Math.round(TimeSitNowObject.node_.value_/60)
			});
		});
		// Buses a esperar a partir de este momento
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/BusesDePie').on('value', (BusesNowObject) => {
			console.log(BusesNowObject);
			this.setState({
				buses: BusesNowObject.node_.value_
			});
		});
		// Buses a esperar a partir de este momento si se desea ir sentado
		firebase.database().ref('DatosPublicosTransmilenio/Ruta1/Puerta3/BusesSentado').on('value', (BusesSitNowObject) => {
			console.log(BusesSitNowObject);
			this.setState({
				busesSit: BusesSitNowObject.node_.value_
			});
		});
	}

	//FALTA AVERIGUAR COMO MOSTRAR LA BARRA DE USUARIOS AHORA SEGÚN usersNow
	render() {

		return (
			<ScrollView style={styles.fullScreen} scrollEnabled={true}>
				<View>
					<Button title='Cultura Transmilenio' color='#13990D' onPress={() => this.props.navigation.navigate('CULTURE', { advise: this.state.culture })} />
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('STATION', { advise: this.state.adviseStation, peopleNowDoor3: this.state.peopleNow })}>
					<View style={styles.usersNow}>
						<Text style={styles.subsubtitle}>Usuarios ahora: {this.state.peopleNow} usuario{this.state.peopleNow==1?null : "s"}</Text>

					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('TIME', { peopleVector: this.state.people, })}>
					<View style={styles.usersToday}>
						<Text style={styles.subsubtitle}>Usuarios hoy:</Text>
						<AreaChart
							style={{ height: 50 }}
							data={/*this.props.peopleVector*/[]} //el ejemplo es con data
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
					<View style={styles.imagesTextBusTime}>
						<View>
							<Image style={styles.busImage} resizemode="contain" source={require('../assets/bus.png')} />
						</View>
						<View>
							<Text>{this.state.buses} buses . Si quieres ir sentado: {this.state.busesSit} buses</Text>
						</View>
					</View>
					<View style={styles.imagesTextBusTime}>
						<View>
							<Image style={styles.busImage} resizemode="contain" source={require('../assets/clock.png')} />
						</View>
						<View>
							<Text>{this.state.timeNow} +/- 2min. Si quieres ir sentado: {this.state.timeSitNow} +/- 3min</Text>
						</View>
					</View>
				</View>
				<View style={styles.searchService}>
					<Button title='Buscar servicio en Mapa' onPress={() => this.props.navigation.navigate('SEARCH')} />
					<Text>TransmiTime es una aplicación que te permite ver cuántas personas se encuentran en este momento en la estación
						. El número de personas que estarán el resto del día y culturizarte respecto al uso del sistema de Transmilenio. Veamos...
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
					</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	imagesTextBusTime: {
		alignItems: "flex-start",
		justifyContent: "space-around",
		flexDirection: "row"
	},
	fullScreen: {
		flexDirection: "column",
		alignSelf: "stretch",
		flex: 1
	},
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
		width: 30,
		height: 30
	},
	subsubtitle: {
		fontSize: 18,
		fontFamily: 'serif'
	},
	cultureButton: {
		flexDirection: "row",
		justifyContent: "flex-end",
		width: '100',
		borderRadius: 20,
	}
});

export default ScreenMainView;