import React from "react";
import { Text, View } from "react-native";

export default class States extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cont:0
        }

        setTimeout(()=>{
            this.setState({cont: this.state.cont+1})
        },2000)
    }

    render(){
        return(
            <View>
                <Text>{this.state.cont}</Text>
            </View>
        )
    }
}