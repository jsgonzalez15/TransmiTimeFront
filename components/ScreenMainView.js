import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';

const ScreenMainView = props => {
    return(
    <View>
        <TouchableOpacity /*onPress={openUsuariosAhora}*/>
        <View style={styles.usersNow}>
            <Text style={styles.subsubtitle}>Usuarios ahora:</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity /*onPress={openUsuariosHoy}*/>
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
            <Button title='Buscar servicio en Mapa' /*onPress={()=> disminuirAcompañantes}*//>
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