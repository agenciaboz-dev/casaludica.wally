import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import { GoalSetting } from "./GoalSetting"
import { ObjectSetting } from "./ObjectsSetting"
import { SizeSetting } from "./SizeSetting"

interface SettingsPageProps {
    navigation: NavigationProp<any, any>
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", gap: 20, justifyContent: "center" }}>
            <GoalSetting navigation={navigation} />
            <ObjectSetting navigation={navigation} />
            <SizeSetting />

            <TouchableOpacity style={{ backgroundColor: "#000", padding: 10, borderRadius: 10 }} onPress={() => navigation.navigate("game")}>
                <Text style={{ fontWeight: "bold", color: "white" }}>começar</Text>
            </TouchableOpacity>
        </View>
    )
}
