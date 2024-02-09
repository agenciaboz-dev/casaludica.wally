import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Alert, Image, TouchableOpacity, View } from "react-native"
import { GameObject } from "../../class/Object"

interface ObjectComponentProps {
    navigation: NavigationProp<any, any>
    object: GameObject
}

export const ObjectComponent: React.FC<ObjectComponentProps> = ({ navigation, object }) => {
    const onPress = () => {
        console.log(object)
        if (object.goal) {
            Alert.alert("acertou")
        }
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
