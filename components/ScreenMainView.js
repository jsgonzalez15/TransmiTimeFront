import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

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
        flex=2,
        paddingTop=5
    },
    usersToday:{
        flex=3,
        paddingVertical=5
    },
    busesLeft:{
        flex=3,
        paddingEnd=5
    },
    companions:{
        flex=2
    },
    searchService:{
        flex=2,
        paddingVertical=5
    },
    subsubtitle:{
        font=12,
        fontFamily= Cambria
    }
});

export default ScreenMainView;