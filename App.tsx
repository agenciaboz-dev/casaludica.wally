import { StatusBar } from "expo-status-bar"
import { Appearance, StyleSheet, Text, View } from "react-native"
import { Routes } from "./src/Router"

export default function App() {
    Appearance.setColorScheme("light")
    
    return (
        <>
            <StatusBar style="auto" hidden />
            <Routes />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
