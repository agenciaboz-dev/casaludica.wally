import React from "react"
import { View } from "react-native"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import { Image } from "expo-image"
import { ClickedImage } from "../../components/ClickedImage"

interface GoalComponentProps {
    object: Goal
}

export const GoalComponent: React.FC<GoalComponentProps> = ({ object }) => {
    return (
        <View style={{ position: "relative" }}>
            <Image key={object.image.toString()} source={object.image} style={{ width: object.width, height: object.height }}></Image>
            {object.found && <ClickedImage object={object} source={images.found} />}
        </View>
    )
}
