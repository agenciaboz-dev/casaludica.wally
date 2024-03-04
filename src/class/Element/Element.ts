import { Alert, Dimensions, ImageSourcePropType } from "react-native"
import { ObjectForm } from "./ObjectForm"
import { Settings } from "../../contexts/settingsContext"

const { width, height } = Dimensions.get("window")

export class GameObject {
    settings: Settings
    x: number
    y: number
    image: ImageSourcePropType
    width: number
    height: number
    elevation: number
    scenery?: boolean

    reRender: () => void

    constructor(data: ObjectForm, reRender: () => void) {
        this.reRender = reRender
        this.scenery = data.scenery
        this.settings = data.settings
        this.width = data.settings.size
        this.height = data.settings.size
        if (data.scenery) {
            this.width = this.width * this.settings.scenery_scale
            this.height = this.height * this.settings.scenery_scale
        }
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
