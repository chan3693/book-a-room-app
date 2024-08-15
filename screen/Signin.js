import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SigninScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignin = () => {
        if (username === '' || password === '') {
            Alert.alert('Please enter username and password')
        } else {
            if (username === 'admin' && password === 'admin') {
                navigation.navigate('Dashboard')
            } else {
                Alert.alert('Invalid user name or password!')
            }
        }
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>SHEUNGKIT_A1</Text>
            <TextInput
                placeholder='Username'
                autoCapitalize='none'
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                autoCapitalize='none'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title = 'Sign In' onPress={onSignin}/>
        </View>

    )

}

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 12
    },
    input: {
        fontSize: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        margin: 12,
        padding: 8,
    },
})