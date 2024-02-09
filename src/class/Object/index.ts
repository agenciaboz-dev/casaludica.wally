import { Alert, Dimensions, ImageSourcePropType } from "react-native"
import { ObjectForm } from "./ObjectForm"

const { width, height } = Dimensions.get("window")

export class GameObject {
    x: number
    y: number
    image: ImageSourcePropType
    goal = false
    width = 50
    height = 50
    elevation: number

    constructor(data: ObjectForm) {
        const { x, y, z } = this.generatePos()
        this.x = x
        this.y = y
        this.elevation = z
        this.image = data.image
        this.goal = !!data.goal
    }

    generatePos() {
        let x = Math.random() * width
        let y = Math.random() * height

        if (x + this.width > width) {
            const difference = x + this.width - width
            x -= difference
        }

        if (y + this.height > height) {
            const difference = y + this.height - height
            y -= difference
        }

        const z = Math.floor(height - y)

        return { x, y, z }
    }
}
