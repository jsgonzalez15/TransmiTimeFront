import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ScreenStationView = props => {
    return (<View>
        <TouchableOpacity>
        <View>
            <Text>Here goes interactive picture</Text>
        </View>
        </TouchableOpacity>
        
         <View>
            <Text>Here goes conventions</Text>
        </View>
        <View>
            <Text>Here goes advise based on time trend</Text>
        </View>
    </View>);
};

const styles = StyleSheet.create({
   
});

export default ScreenStationView;