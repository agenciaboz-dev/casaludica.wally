import React, { useContext } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Alert, TouchableOpacity, View } from "react-native"
import { GameObject } from "../../class/Element/Element"
import { Game } from "../../class/Game/Game"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import SettingsContext from "../../contexts/settingsContext"
import { Image } from "expo-image"

interface ObjectComponentProps {
    navigation: NavigationProp<any, any>
    object: GameObject | Goal
    game: Game
}

export const ObjectComponent: React.FC<ObjectComponentProps> = ({ navigation, object, game }) => {
    const zIndex = object instanceof Goal && object.found ? 998 : object.elevation

    const { settings } = useContext(SettingsContext)
    const size = object.width * (object.scenery ? settings.scenery_scale : 1)

    const onPress = () => {
        game.onObjectPress(object)
    }

    return (
        <TouchableOpacity
            style={{
                position: "absolute",
                bottom: object.y,
                left: object.x,
                elevation: zIndex,
                zIndex: zIndex,
                pointerEvents: object.scenery ? "none" : "auto",
            }}
            onPress={onPress}
        >
            <Image source={object.image} style={{ width: size, height: size }}></Image>

            {object instanceof Goal && object.found && (
                <Image source={images.found} style={{ width: settings.size, height: settings.size, position: "absolute" }} />
            )}
        </TouchableOpacity>
    )
}
