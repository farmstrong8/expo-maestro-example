import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    const [counter, setCounter] = useState(0);
    const shouldShowTitle = counter > 10;

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            {shouldShowTitle ? (
                <Text testID="special-title">You made it to 10!</Text>
            ) : null}
            <Text style={styles.counterText}>{counter}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    testID="increment-button"
                    title="Increment"
                    onPress={() => setCounter(counter + 1)}
                />
                <Button
                    testID="decrement-button"
                    title="Decrement"
                    onPress={() => setCounter(counter - 1)}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    counterText: {
        fontSize: 48,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        paddingHorizontal: 10,
    },
});
