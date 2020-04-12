import React,{useEffect,useState} from 'react'
import {View,AsyncStorage} from 'react-native'

import api from '../services/api'

export default function SpotList( {tech} ){
    const [spots, setSpots] = useState([])

    useEffect(()=>{
        async function loadSpots(){
            const response = await api.get('/spots',{
                params:{tech}
            })    
            setSpots(response.data)
        }
        loadSpots()
    },[])

    return <View />
}