import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';


//Idea: colocar una imagen de fondo tal y como aparece en fast prototyping y colocar objetos con texto
//cantidad de personas y estilo en función de ese estilo
class ScreenStationView extends Component {

	static navigationOptions = {
		title: 'Universidades-vagón 2/ Ahora',
		headerStyle: {
			backgroundColor: '#BC922B',
		},
		headerTintColor: '#fff',
	};

	render() {
		return (
			<ScrollView>
				<ImageBackground source={require('../assets/stationVagon3.png')} style={{ width: '100%', height: '100%' }}>
					<Text>{this.props.peopleNowDoor3}</Text>
				</ImageBackground>
				<View>
					<Image style={styles.conventions} resizemode="contain" source={require('../assets/conventions.png')} />
				</View>
				<View>
					<Text>{this.props.advise}</Text>
				</View>
			</ScrollView>);
	}
}

const styles = StyleSheet.create({
	conventions: {
		width: '50%',
		height: '50%'
	},
	fullScreen: {
		flexDirection: "column",
		alignSelf: "stretch",
	}
});

export default ScreenStationView;