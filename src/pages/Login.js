import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user) {
                navigation.navigate('Home');
            }
        })
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const users = await api();
        
        users.forEach(({ user: apiUsername, password: apiPassword}) => {
            if(apiUsername === user && apiPassword === password) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Usuário ou senha inválidos!');
            }
        });
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding" 
            style={styles.container}
        >
            <Image source={logo} style={styles.image} />
            <View style={styles.form}>
                <Text style={styles.label}>Login *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu login"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser}
                />

                <Text style={styles.label}>Senha *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 150,
        height: 150
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        fontSize: 18
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 3
    },

    button: {
        height: 50,
        backgroundColor: '#rgb(96, 154, 221)5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
