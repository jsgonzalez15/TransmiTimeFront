import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

const ScreenCultureView = props => {
    return (<View>
        <View>
            <Text>Consejo de hoy:</Text>
            <Text>Here goes received advise</Text>
        </View>
        <View>
            <Text> Visita la página de Transmilenio! </Text>
            <TouchableOpacity /*onPress={()=> openTransmilenioPage} https://www.transmilenio.gov.co*/>
                <Image style={styles.transmiPage} resizemode="contain" source={require('../assets/transmiLink.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity /*onPress={openLinkManual} https://www.transmilenio.gov.co/publicaciones/149132/manual-del-usuario/*/>
            <View>
                <Image style={styles.manual} resizemode="contain" source={require('../assets/manualTransmi.png')} />
            </View>
        </TouchableOpacity>
        <View>
            <Image source={require('../assets/lupaGreen.png')} />
            <Button title="¿Tienes Preguntas?" /*onPress={() => openCultureLink1} https://www.transmilenio.gov.co/preguntas-frecuentes/93/cultura/*/ />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    manual: {
        width: '80%',
        height: '100%'
    },
    transmiPage: {
        width: '40%',
        height: '40%'
    },
    theText:{
        height: 60,
        fontSize: 18
    }
});

export default ScreenCultureView;