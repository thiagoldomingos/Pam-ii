import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

export default function Index() {

    const imageNaruto = require('../../imagens/Naruto.jpg');
    const imageDragon = require('../../imagens/Dragon.jpg');
    const imageNanatsu = require('../../imagens/Nanatsu.jpg');
    const imageOne = require('../../imagens/One.jpg');
    const imageBoku = require('../../imagens/Boku.jpg');
    const imageDemon = require('../../imagens/demon.jpg')


    return (
        <ScrollView>
            <SafeAreaView style={styles.contentContainer}>
            <View style={styles.container_one}>
                <View style={styles.item}>
                    <Text>Naruto</Text>
                    <Image
                        source={imageNaruto}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text>Dragon Ball</Text>
                    <Image
                        source={imageDragon}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text>Nanatsu no Taizai</Text>
                    <Image
                        source={imageNanatsu}
                        style={styles.image}
                    />
                </View>
            </View>
            </SafeAreaView>

            <SafeAreaView style={styles.contentContainer_two}>
            <View style={styles.container_two}>
                <View style={styles.item}>
                    <View> One Pucnh</View>
                    <Image 
                        source={imageOne}
                        style={styles.image}
                    />
                    <View style={styles.item}>
                        <Text>Boku no Hero</Text>
                        <Image
                            source={imageBoku}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text> Demon Slayer</Text>            
                        <Image
                            source={imageDemon}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container_one: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        maxWidth: 1500
    },
    item: {
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 10,
        margin: 30,
        borderRadius: 30
    },

    // Container 2
    contentContainer_two:{
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});
