import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';

const ScreenCultureView = props => {
    return (<View>
        <View>
            <Text>Consejo de hoy:</Text>
            <Text>Here goes received advise</Text>
        </View>
        <View>
            <Text> Visita la página de Transmilenio! </Text>
            <TouchableOpacity /*onPress={()=> openTransmilenioPage}*/>
                <Text>here goes transmilenio image</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity /*onPress={openLinkManual}*/>
            <View>
                <Text>Here goes image and link to manual</Text>
             </View>
        </TouchableOpacity>
            <View>
                <Button title="¿Tienes Preguntas?" /*onPress={() => openCultureLink1}*//>
            </View>     
    </View>);
};

const styles = StyleSheet.create({
   
});

export default ScreenCultureView;