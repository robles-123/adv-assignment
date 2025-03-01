import { router } from "expo-router";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import HTMLView from "react-native-htmlview";

export default function Exercise() {
    const exercises = [
        { title: "Exercise 3", description: "<p>Create login screen<br>Login screen fields:<ul><li>Email</li><li>Password</li></ul></p>", route: "/login" },
        { title: "Exercise 4", description: "<p>useState/useEffect</p>", route: "/exercise_4" },
        { title: "Exercise 5", description: "<p>Register Screen</p>", route: "/register" },
        { title: "Exercise 6", description: "<p>Some other description</p>", route: "/exercise_6" },
        { title: "Exercise 7", description: "<p>Some other description</p>", route: "/exercise_7" },
    ];

    return (
        <ScrollView style={styles.container}>
            {exercises.map((exercise, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.card}
                    onPress={() => router.push(exercise.route)}
                >
                    <Text style={styles.title}>{exercise.title}</Text>
                    <HTMLView value={exercise.description} stylesheet={htmlStyles} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#AEC6CF",
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
});

const htmlStyles = {
    p: { fontSize: 16 },
    li: { marginBottom: 5 },
};
