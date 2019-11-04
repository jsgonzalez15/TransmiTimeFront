import React, {useState, Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import Header from './Header';


const ScreenMainView = props => {
    return(
    <View>
        <View>
            <Header title="1 Portal El dorado" subtitle="Universidades-vagón 2"/>
         </View>
        <TouchableOpacity /*onPress={() => this.props.navigation.navigate('STATION')}*/>
        <View style={styles.usersNow}>
            <Text style={styles.subsubtitle}>Usuarios ahora:</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity /*onPress={() => this.props.navigation.navigate('TIME')}*/>
        <View style={styles.usersToday}>
            <Text style={styles.subsubtitle}>Usuarios hoy:</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.busesLeft}>
            <Text style={styles.subsubtitle}>Buses a esperar:</Text>
        </View>
        <View style={styles.companions}>
            <Text style={styles.subsubtitle}>¿Cuántas personas más van contigo?</Text>
            <Button title='+' /*onPress={()=> aumentarAcompañantes}*//>
            <Button title='-' /*onPress={()=> disminuirAcompañantes}*//>
        </View>
        <View style={styles.searchService}>
            <Button title='Buscar servicio en Mapa' /*onPress={() => this.props.navigation.navigate('SEARCH')}*//>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    usersNow:{
        height:60,
        fontSize:18,
        paddingTop:10
    },
    usersToday:{
        height:80,
        fontSize:18,
        paddingVertical:40
    },
    busesLeft:{
        height:80,
        fontSize:18,
        paddingEnd:10
    },
    companions:{
        fontSize:18,
        height:80
    },
    searchService:{
        fontSize:18,
        height:40,
        paddingVertical:5
    },
    subsubtitle:{
        fontSize:18,
        fontFamily: 'serif'
    }
});

export default ScreenMainView;