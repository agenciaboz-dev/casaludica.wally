import { StatusBar } from "expo-status-bar"
import { Appearance, StyleSheet, Text, View } from "react-native"
import { Routes } from "./src/Router"
import { useFonts } from "expo-font"
import { PaperProvider } from "react-native-paper"
import { theme } from "./src/style/theme"

export default function App() {
    Appearance.setColorScheme("light")

    let [loaded] = useFonts({
        KGSecondChancesSolid: require("./assets/font/KGSecondChancesSolid.ttf"),
        KGSecondChancesSketch: require("./assets/font/KGSecondChancesSketch.ttf"),
    })

    if (!loaded) {
        return <></>
    }

    return (
        <PaperProvider theme={theme}>
            <StatusBar style="auto" hidden />
            <Routes />
        </PaperProvider>
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
