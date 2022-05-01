import React from "react";
import { View, Text, Platform } from "react-native";
import Header from './Header';
import Lorem from "./Lorem";

// Plataform.OS retorna o tipo de sistema opacional do celular
export default class Render extends React.Component {

    constructor(props) {
        super(props);
        this.mostrarRender = false;
        this.plataforma = Platform.OS;
    }

    mostrarConteudo() {
        if (this.plataforma == 'android') {
            return (
                <View>
                    <Header></Header>
                    <Text>
                        Nome:
                    </Text>
                </View>
            )

        } else {
            return (
                <View>
                    <Header></Header>
                    <Lorem></Lorem>
                </View>
            )

        }
    }

    render() {
        var component = [];
        for (var i = 1; i <= 100; i++) {
            component[i] = <Text key={i}>Numero: {i}</Text>
        }
        return (
            <View>
                <View>{this.mostrarConteudo()}</View>
                <View> 
                    {
                        component.map((i)=>{
                            return i
                        })
                    }
                </View>
            </View>
        )
    }

}

