import React from 'react'
import {StyleSheet,KeyboardAvoidingView,View,Image,Text,TextInput,TouchableOpacity} from 'react-native'

import logo from '../assets/logo.png'
export default function  Login() {
    
    return (
        <View style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
              <Text style={styles.label}>E-MAIL *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Seu email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />


                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de Interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label : {
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 8,
    },
    form : {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button:{
        height: 42,
        backgroundColor: "#f05a45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    buttontext:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})