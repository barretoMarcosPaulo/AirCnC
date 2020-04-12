import React,{useState,useEffect} from 'react'
import { StyleSheet, ScrollView, AsyncStorage, SafeAreaView, Platform, KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import api from '../services/api'

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List() {
    const [techs,setTechs] = useState([])

    useEffect( ()=>{
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    },[])
    
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} /> )}
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    logo : {
        marginTop: 50,
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})