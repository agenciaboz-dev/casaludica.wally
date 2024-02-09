import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Routes } from "./src/Router"

export default function App() {
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
