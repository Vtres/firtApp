import React, { useEffect, useState } from 'react';
import { Button, Text, View } from "react-native";

export default function Hooks() {

    const [count, setCount] = useState(0)
    const [lista, setLista] = useState(['Vini', 'Lucas', 'Pedro', 'João'])
    useEffect(() => {
        alert('Hook de efeito')
    }, [])

    return (
        <View style={{ padding: 20 }}>
            <View style={{marginTop:10}}>
                <Button title='Contando numero' onPress={() => setCount(count + 1)}></Button>
                <Text>{count}</Text>
            </View>
            <View style={{marginTop:10}}>
            <Button title='Incrementando lista' onPress={() => setLista([...lista,'salada'])}></Button>
                {
                    lista.map((item) => {
                        return (<Text key={item}>{item}</Text>);
                    })
                }

            </View>
        </View>
    )
}