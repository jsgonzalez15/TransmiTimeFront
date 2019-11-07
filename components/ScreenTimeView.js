import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'

/*Find out how to make touchable arrays*/
class ScreenTimeView extends Component {

	constructor (props){
		super(props)
		//peopleArray:[]
	}
	static navigationOptions = {
		title: 'Universidades-vagón 2 / Hoy',
		headerStyle: {
			backgroundColor: '#E56723',
		},
		headerTintColor: '#fff',
	};
	

	render() {
		//this.props.peopleVector.forEach(numero=>peopleArray.push(data[message])); pasar info a vector (creo que este proceso no es necesario, keys debería ser suficiente)
		const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    let data1 = this.props.navigation.getParam('peopleVector', []).map(item => {
      return {value: parseInt(item.split(',')[2]), label: item.split(',')[0]};
    });
		return (
      <View style={{ flexDirection: 'row', height: 1500, paddingVertical: 16 }}>
        <YAxis
            data={data1}
            yAccessor={({ index }) => index}
            scale={scale.scaleBand}
            contentInset={{ top: 10, bottom: 10 }}
            spacing={0.2}
            formatLabel={(_, index) => data1[ index ].label}
        />
      
			<BarChart
				style={{ flex: 1 }}
        data={ data1} //el ejemplo es con data
        horizontal={true}
        yAccessor={ ({ item }) => {return item.value;} }
        spacing={0.2}
        gridMin={0}
				contentInset={{ top: 30, bottom: 30 }}
				svg={{ fill: '#E56723' }}
			>
				<Grid direction={Grid.Direction.VERTICAL}/>
			</BarChart>
			</View>
		)
	}
}

const styles = StyleSheet.create({

});

export default ScreenTimeView;