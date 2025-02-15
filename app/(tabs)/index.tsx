import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import { Link } from "expo-router"

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            Joshua B. Robles
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    child11: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        borderRadius: 4
    },
    child12: {
        width: 20,
        height: 20,
        backgroundColor: 'pink',
        borderRadius: 4
    },
    container: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        backgroundColor: 'violet',
    },
    child1: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
    },
    child2: {
        flex: 6,
        backgroundColor: 'red',
    },
    child3: {
        flex: 1,
        backgroundColor: 'blue',
    },
    text: {
        color: 'BLACK',
        fontSize: 34
    }
})