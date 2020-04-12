import React,{useState,useEffect} from 'react'
import { StyleSheet, AsyncStorage, Platform, KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import api from '../services/api'

export default function List() {
    const [techs,setTechs] = useState([])

    useEffect( ()=>{
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    },[])
    
    return (
        <View>
            
        </View>
    )
}