import {useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from "expo-router";

export default function Home(){

    const imageHome = require('../imagens/satoro.webp');

    const router = useRouter();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            router.push('/home');
        }, 3000);
    })

    return(
        <View style={styles.container}>
            <Text style={styles.titleIndex}>
                welcome to best App
            </Text>
            <Animatable.Image
                style={styles.imgAnimatable}
                animation={{
                    from:{ rotateY: '0deg'},
                    to: {rotateY: '180deg'}
                }}
                source={imageHome}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleIndex:{
        marginBottom: 10,
        fontSize: 30
    },
    imgAnimatable:{
        width: 150,
        height: 150,
        borderRadius: 30
    }
})