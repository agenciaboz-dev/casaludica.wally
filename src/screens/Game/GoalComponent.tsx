import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { View } from "react-native"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import { Image } from "expo-image"

interface GoalComponentProps {
    navigation: NavigationProp<any, any>
    object: Goal
}

export const GoalComponent: React.FC<GoalComponentProps> = ({ navigation, object }) => {
    return (
        <View style={{ position: "relative" }}>
            <Image key={object.image.toString()} source={object.image} style={{ width: 50, height: 50 }}></Image>
            {object.found && <Image source={images.found} style={{ width: 50, height: 50, position: "absolute" }} />}
        </View>
    )
}
