import React,{useEffect, useState} from 'react';
import { Text, View } from "react-native";

export default function Hooks(){

    useEffect(()=>{
        alert('Hook de efeito')
    })

    return(
        <View>
            <Text>Olá</Text>
        </View>
    )
}