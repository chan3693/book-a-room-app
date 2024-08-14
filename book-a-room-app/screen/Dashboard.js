import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const DashboardScreen = ({navigation}) => {
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')
    const [numOfPeople, setNumOfPeople] = useState('')
    const [room, setRoom] = useState('A101')
    const roomList = ['A101', 'A102', 'A103', 'A104', 'A105']

    const onBtnPress = () => {
        if (studentId && name && numOfPeople){
            if (!isNaN(numOfPeople)) {
                navigation.navigate('Booking', {
                    studentId, name, numOfPeople: parseInt(numOfPeople), room
                })
            } else {
                Alert.alert('Please enter a valid number of people!')  
            }
        } else {
            Alert.alert('All fields are required!')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>book a study room on campus.</Text>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Student ID'
                    value={studentId}
                    onChangeText={setStudentId}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Number of people'
                    value={numOfPeople}
                    onChangeText={setNumOfPeople}
                    keyboardType='numeric'
                    style={styles.input}
                />
                <View style={styles.horizontal}>
                    <Text style={styles.pickerLabel}>Select Room :</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={room}
                        onValueChange={(selectedRoom) => setRoom(selectedRoom)}
                    >
                        {
                            roomList.map((value, index) => {
                                return<Picker.Item
                                style={styles.pickerItem}
                                key={index}
                                label={value}
                                value={value} />
                            })
                        }
                    </Picker>
                </View>
                
            </View>
            
            <Button title='Check Availability' onPress={onBtnPress}/>
        </View>
        
    )

}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 12
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    input: {
        fontSize: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 12,
        padding: 8,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: 'auto',
        height: 'auto',
        paddingRight: 12
    },
    picker:{
        height: 'auto',
        width: '50%',
    },
    pickerItem: {
        fontSize: 20,
    },
    pickerLabel: {
        fontSize: 20,
        paddingLeft: 12
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 12
    },
})