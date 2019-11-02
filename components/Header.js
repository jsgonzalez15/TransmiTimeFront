import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = props => {
    return (<View style ={styles.theHead}>
        <Text style ={styles.theHeadText}>{props.title}</Text>
        <Text style ={styles.theHeadText}>{props.subtitle}</Text>
    </View>);
};

const styles = StyleSheet.create({
    theHead:{
        width:'100%',
        height:90,
        paddingTop:40,
        backgroundColor:'#ed760e', /* Color naranja algo oscuro para pantalla principal ¿Cómo programo esto?*/
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    theHeadText:{
        color:'white',
        fontSize:18
    }
});

export default Header;