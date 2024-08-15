import { View, Text, StyleSheet } from 'react-native';

const BookingScreen = ({route}) => {
    const {studentId, name, numOfPeople, room} = route.params

    const rooms = [ 
        {roomNumber : 'A101', capacity : 5, available: true},
        {roomNumber : 'A102', capacity : 10, available: false},
        {roomNumber : 'A103', capacity : 8, available: false},
        {roomNumber : 'A104', capacity : 10, available: true},
        {roomNumber : 'A105', capacity : 7, available: true} 
    ]

    const selectedRoom = rooms.find((value) => value.roomNumber === room )

    let message = `Room ${room} is available and enough for selected number of people.`
    let messageStyle = styles.messageOK
    if (!selectedRoom.available) {
        message = `Room ${room} is not available.`
        messageStyle = styles.messageNotOK
    } else if (numOfPeople > selectedRoom.capacity) {
        message = `Room ${room} is not enough for selected number of people.`
        messageStyle = styles.messageNotOK
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Booking Details</Text>
            <View style={styles.formContainer}>
                <View style={styles.horizontal}>
                    <Text style={styles.prompts}>Student ID :</Text>
                    <Text style={styles.prompts2}>{studentId}</Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.prompts}>Name :</Text>
                    <Text style={styles.prompts2}>{name}</Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.prompts}>Room :</Text>
                    <Text style={styles.prompts2}>{room}</Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.prompts}>Number of people :</Text>
                    <Text style={styles.prompts2}>{numOfPeople}</Text>
                </View>
            </View>
            <Text style={messageStyle}>{message}</Text>
        </View>
    )
}

export default BookingScreen;

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
    messageOK: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
    },
    messageNotOK: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    prompts: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    prompts2: {
        fontSize: 20,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%',
        height: 'auto',
        marginBottom: 12,
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
        marginBottom: 24
    },
})