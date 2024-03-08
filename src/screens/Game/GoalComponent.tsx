import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { View } from "react-native"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import { Image } from "expo-image"

interface GoalComponentProps {
    object: Goal
}

export const GoalComponent: React.FC<GoalComponentProps> = ({ object }) => {
    const size = 80
    return (
        <View style={{ position: "relative" }}>
            <Image key={object.image.toString()} source={object.image} style={{ width: size, height: size }}></Image>
            {object.found && <Image source={images.found} style={{ width: size, height: size, position: "absolute" }} />}
        </View>
    )
}
