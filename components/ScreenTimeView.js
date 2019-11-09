import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView  } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import { Text as SVGText } from 'react-native-svg'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'

/*Find out how to make touchable arrays*/
class ScreenTimeView extends Component {

	constructor (props){
		super(props)
		this.state = {
      data: [],
      height: 2000
    };
	}
	static navigationOptions = {
		title: 'Universidades-vagón 2 / Hoy',
		headerStyle: {
			backgroundColor: '#E56723',
		},
		headerTintColor: '#fff',
	};
  
  componentDidMount() {
    let today = new Date();
    let minutes = (today.getMinutes() + 60 * today.getHours())*60;
    console.log("prueba 1");
    console.log(minutes);
    let data = []
    this.props.navigation.getParam('peopleVector', []).forEach(item => {
      let values = item.split(",");
      if(parseInt(values[1])>minutes) {
        data.push({value: parseInt(values[2]), label: values[0]});
      }
      return ;
    });
    let height = Math.min(2000, 15*data.length);
    console.log(data.length);
    this.setState({
      data,
      height
    });
  }

	render() {
		//this.props.peopleVector.forEach(numero=>peopleArray.push(data[message])); pasar info a vector (creo que este proceso no es necesario, keys debería ser suficiente)
    const CUT_OFF = 100;
    const Labels = ({  x, y, bandwidth, data }) => (
        data.map((value, index) => (
            <SVGText
                key={ index }
                x={ value.value > CUT_OFF ? x(0) + 10 : x(value.value) + 10 }
                y={ y(index) + (bandwidth / 2) }
                fontSize={ 11 }
                fill={ value.value > CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
            >
                {value.value}
            </SVGText>
        ))
    );

		return (
      <ScrollView style={StyleSheet.fullScreen}>
      <View style={{ flexDirection: 'row', paddingVertical: 16 }}>
        <YAxis
            data={this.state.data}
            yAccessor={({ index }) => index}
            scale={scale.scaleBand}
            contentInset={{ top: 10, bottom: 10 }}
            spacing={0.2}
            formatLabel={(_, index) => this.state.data[ index ].label}
        />
      
			<BarChart
				style={{ flex: 1, height:this.state.height }}
        data={ this.state.data} //el ejemplo es con data
        horizontal={true}
        yAccessor={ ({ item }) => {return item.value;} }
        spacing={0.2}
        gridMin={0}
				contentInset={{ top: 30, bottom: 30 }}
				svg={{ fill: '#E56723' }}
			>
				<Grid direction={Grid.Direction.VERTICAL}/>
        <Labels/>
			</BarChart>
			</View>
      </ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	fullScreen: {
		flexDirection: "column",
    alignSelf: "stretch",
    flex:1
	}
});

export default ScreenTimeView;