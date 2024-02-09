import { Dimensions, ImageSourcePropType } from "react-native"

export class GameObject {
    x: number
    y: number
    image: ImageSourcePropType

    constructor(image: ImageSourcePropType) {
        const { width, height } = Dimensions.get("window")
        this.x = Math.random() * width
        this.y = Math.random() * height

        this.image = image
    }
}
