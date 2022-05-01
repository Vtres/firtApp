import React from "react";
import { Button, Text, View } from "react-native";

export default class Body extends React.Component{

    constructor(props){
        super(props)
        this.nome = "Vinicius"
    }

    render(){
        return(
            <View>
                <Text>{this.props.texto}</Text>
                <Text>{this.nome}</Text>
                <Button title={this.props.titulo}></Button>
            </View>
        )
    }
}