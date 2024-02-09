import React from "react"
import { BackHandler, Dimensions, Platform, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native"
import { NavigationProp } from "@react-navigation/native"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 50, alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                <Text>Jogar</Text>
            </TouchableOpacity>

            {Platform.OS != "ios" && (
                <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
