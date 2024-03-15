import { ImageSourcePropType } from "react-native"
import { ObjectForm } from "./ObjectForm"
import { Settings } from "../../contexts/settingsContext"

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
        this.width = data.width
        this.height = data.height
        if (data.scenery) {
            this.width = this.width * this.settings.scenery_scale
            this.height = this.height * this.settings.scenery_scale
        }

        this.x = data.x
        this.y = data.y
        this.elevation = data.z
        this.image = data.image
    }
}
