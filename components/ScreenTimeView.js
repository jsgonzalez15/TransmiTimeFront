import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

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
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
 
        return (
            <AreaChart
                style={{ height: 200 }}
                data={ this.props.peopleVector} //el ejemplo es con data
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: '#E56723' }}
            >
                <Grid/>
            </AreaChart>
            
        )}
};

const styles = StyleSheet.create({

});

export default ScreenTimeView;