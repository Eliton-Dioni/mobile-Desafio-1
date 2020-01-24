import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import lisa from '../assets/lisa.gif';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Você está <Text style={styles.strong}>Logado</Text></Text>
            </View>
            <Image source={lisa} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 300,
        height: 250
    },

    text: {
        color: '#000',
        marginBottom: 30,
        fontSize: 30
    },

    strong: {
        fontWeight: 'bold',
    }
});
