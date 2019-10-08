import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import bg from '../../assets/bg.png';

export default class Login extends React.Component {
    static navigationOptions = {
        headerStyle: {
            elevation: 0,
        },
      headerTintColor: '#dfe6e9',
      headerTransparent: true
    }
    render() {
        return (
            <ImageBackground source={bg} style={{width: '100%', height: '100%',}}>
                <View>
                    <View style={{flex:1, marginBottom:'30%', marginTop:'20%'}}>
                        <Text style={{ paddingLeft: 30, fontSize:25, color:'#dfe6e9', fontWeight:'bold' }}>Login Ke Akun Anda</Text>
                        <Text style={{ paddingLeft: 30, color:'#b2bec3', fontWeight:'bold' }}>Silahkan mengisi data di bawah ini</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={styles.textLabel}>Nomor Handphone</Text>
                        <TextInput style={styles.textInput} placeholder="+628 0000" />
                        <Text style={styles.textLabel}>Password</Text>
                        <TextInput style={styles.textInput} secureTextEntry={true} placeholder="•••••••" />
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={{ color: '#dfe6e9', textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ }}>
                            <Text style={{ color: '#636e72', textAlign: 'center', fontWeight: 'bold', fontSize:12 }}>Lupa password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    textLabel:{
        marginBottom: 5, 
        color: '#636e72', 
        fontWeight: 'bold'
    },
    textInput:{
        padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 15, borderRadius: 5
    },
    btnLogin:{
        backgroundColor: "#636e72", padding: 15, borderRadius: 5, marginBottom:10
    },
    boxContainer: {
        padding: 30,
        backgroundColor: "#FFF",
        width:'90%',
        borderRadius:10,
        alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 100,
        elevation: 10,
    },
});
