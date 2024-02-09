import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Alert, Image, TouchableOpacity, View } from "react-native"
import { GameObject } from "../../class/Object"
import { Game } from "../../class/Game"
import { Goal } from "../../class/Goal"

interface ObjectComponentProps {
    navigation: NavigationProp<any, any>
    object: GameObject | Goal
    game: Game
}

export const ObjectComponent: React.FC<ObjectComponentProps> = ({ navigation, object, game }) => {
    const onPress = () => {
        game.onObjectPress(object)
    }

    return (
        <TouchableOpacity
            style={{ position: "absolute", bottom: object.y, left: object.x, elevation: object.elevation, zIndex: object.elevation }}
            onPress={onPress}
        >
            <Image source={object.image} style={{ width: object.width, height: object.height }} />
        </TouchableOpacity>
    )
}
