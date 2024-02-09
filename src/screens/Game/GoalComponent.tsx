import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Image, ImageBackground, View } from "react-native"
import { Goal } from "../../class/Goal"
import images from "../../images"

interface GoalComponentProps {
    navigation: NavigationProp<any, any>
    object: Goal
}

export const GoalComponent: React.FC<GoalComponentProps> = ({ navigation, object }) => {
    return (
        <ImageBackground key={object.image.toString()} source={object.image} style={{ width: 50, height: 50 }}>
            {object.found && <Image source={images.found} style={{ width: 50, height: 50 }} />}
        </ImageBackground>
    )
}
