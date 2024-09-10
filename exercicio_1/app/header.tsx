import React from "react";
import { View, Text, SafeAreaView, Button, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Header(){

    const logo = require('../imagens/logo.jpeg')

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={logo} style={styles.logo}/>
                <Button
                    title="Cadastrar"
                    onPress={()=>router.replace('/pagesIndex/home')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 50,
        height: 50,
        borderRadius: 30
    },
    container:{
        height: 70,
        backgroundColor: '#00f',
    },
})