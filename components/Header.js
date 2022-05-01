import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.headerLogo}>
                    Salão da Dani
                </Text>
            </View>
            <View>
                <Text style={styles.headerOptions}>
                    HOME | SOBRE | CONTATO
                </Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        // marginTop: 20, 
        display: 'flex', 
        flexWrap: 'nowrap',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },

    headerLogo:{
        fontSize: 15, 
        padding: 10,
    },

    headerOptions:{
        fontSize: 15, 
        textAlign: 'right', 
        padding: 10
    }
})
export default Header;