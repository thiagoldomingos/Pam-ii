import { router, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {

    // variáveis para guarda as imagens de cada Anime
    const imageNaruto = require('../../imagens/Naruto.jpg');
    const imageDragon = require('../../imagens/Dragon.jpg');
    const imageNanatsu = require('../../imagens/Nanatsu.jpg');
    const imageOne = require('../../imagens/One.jpg');
    const imageBoku = require('../../imagens/Boku.jpg');
    const imageDemon = require('../../imagens/demon.jpg')

    return (
        <ScrollView>
            <SafeAreaView style={styles.contentContainer}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text>Naruto</Text>
                        <Link href="/page/pageAnimes\naruto">
                            <Pressable>
                                <Image source={imageNaruto} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.item}>
                        <Text>Dragon Ball</Text>
                        <Link href="/page/pageAnimes\dragon">
                            <Pressable>
                                <Image source={imageDragon} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.item}>
                        <Text>Nanatsu no Taizai</Text>
                        <Link href="/page/pageAnimes\nanatsu">
                            <Pressable>
                                <Image source={imageNanatsu} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.item}>
                        <Text>One Punch</Text>
                        <Link href="/page/pageAnimes\one">
                            <Pressable>
                                <Image source={imageOne} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.item}>
                        <Text>Boku no Hero</Text>
                        <Link href="/page/pageAnimes\boku">
                            <Pressable>
                                <Image source={imageBoku} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.item}>
                        <Text>Demon Slayer</Text>
                        <Link href="/page/pageAnimes\demon">
                            <Pressable>
                                <Image source={imageDemon} style={styles.image} />
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    item: {
        alignItems: 'center',
        width: '30%',
        marginVertical: 10,
    },
    image: {
        height: 300,

        width: 300, // Ensures that the image takes up the full width of the item
        aspectRatio: 1, // Ensures that the image is square
        marginTop: 10,
        borderRadius: 30,
    },
});

