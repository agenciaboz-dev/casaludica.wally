import { Image, ImageSource } from "expo-image"
import React from "react"
import { GameObject } from "../class/Element/Element"

interface ClickedImageProps {
    object: GameObject
    source: string | number | ImageSource | ImageSource[] | string[] | null | undefined
}

export const ClickedImage: React.FC<ClickedImageProps> = ({ object, source }) => {
    return <Image source={source} style={{ width: object.width, height: object.height, position: "absolute", resizeMode: "contain" }} />
}
