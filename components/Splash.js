
import React,{ useEffect } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../assets/logo.png';

const Splash = ({navigation}) => {
    useEffect(() => {
         setTimeout(()=>{navigation.replace("Catagories")}, 1500);
    })
    return (
        <View style={{
            backgroundColor: '#000',
            flex: 1,
            justifyContent:'center'
        }}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.txt}>News App by Saikat</Text>
        </View>
    )
}
export default Splash;
const styles = StyleSheet.create({
    image: {
        alignSelf:'center',
        height:350,
        width: 350,
        marginTop:-70
    },
    txt: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 30,
        fontFamily:'notoserif'
    }
})