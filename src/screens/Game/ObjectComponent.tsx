import React, { useContext } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Alert, Image, ImageBackground, TouchableOpacity, View } from "react-native"
import { GameObject } from "../../class/Element/Element"
import { Game } from "../../class/Game/Game"
import { Goal } from "../../class/Goal"
import images from "../../images"
import SettingsContext from "../../contexts/settingsContext"

interface ObjectComponentProps {
    navigation: NavigationProp<any, any>
    object: GameObject | Goal
    game: Game
}

export const ObjectComponent: React.FC<ObjectComponentProps> = ({ navigation, object, game }) => {
    const zIndex = object instanceof Goal && object.found ? 999 : object.elevation

    const { settings } = useContext(SettingsContext)

    const onPress = () => {
        game.onObjectPress(object)
    }

    return (
        <TouchableOpacity style={{ position: "absolute", bottom: object.y, left: object.x, elevation: zIndex, zIndex: zIndex }} onPress={onPress}>
            <ImageBackground source={object.image} style={{ width: object.width, height: object.height }}>
                {object instanceof Goal && object.found && <Image source={images.found} style={{ width: settings.size, height: settings.size }} />}
            </ImageBackground>
        </TouchableOpacity>
    )
}
