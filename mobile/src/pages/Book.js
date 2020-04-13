import React, { useState } from 'react'
import { StyleSheet,Alert,ScrollView, AsyncStorage, SafeAreaView, Platform, KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import api from '../services/api'


export default function Book({navigation}) {
    const spot_id = navigation.getParam('spot_id')
    const[date,setDate] = useState('')

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user')
        await api.post(`/spots/${spot_id}/bookings`,{
            date,

        },{
            headers:{user_id}
        })

        Alert.alert('Solicitação de reserva enviada.')
        navigation.navigate('List')
    }

    function handleCancel(){
        navigation.navigate('List')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar"
                placeholderTextColor="#999"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttontext}>Solicitar Reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button,styles.cancelButton]} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        marginTop: 50,
        margin: 20
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
    button: {
        height: 42,
        backgroundColor: "#f05a45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    buttontext: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    cancelButton: {
        marginTop: 10,
        backgroundColor: "#ccc",

    },
    cancelButtonText: {
        fontWeight: "bold",
        fontSize: 16
    },
    label: {
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 8,
    },
})