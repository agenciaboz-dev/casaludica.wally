import { Alert, Dimensions, ImageSourcePropType } from "react-native"
import { ObjectForm } from "./ObjectForm"
import { uid } from "uid"

const { width, height } = Dimensions.get("window")

export class GameObject {
    x: number
    y: number
    image: ImageSourcePropType
    width = 50
    height = 50
    elevation: number

    reRender: () => void

    constructor(data: ObjectForm, reRender: () => void) {
        this.reRender = reRender
        const { x, y, z } = this.generatePos(data.offsetY)
        this.x = x
        this.y = y
        this.elevation = z
        this.image = data.image
    }

    generatePos(offsetY?: number) {
        let x = Math.random() * width
        let y = Math.random() * height + (offsetY || 0)

        if (x + this.width > width) {
            x = this.generatePos(offsetY).x
        }

        if (y + this.height > height) {
            y = this.generatePos(offsetY).y
        }

        const z = Math.floor(height - y)

        return { x, y, z }
    }
}

