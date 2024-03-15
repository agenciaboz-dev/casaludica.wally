import { ImageSourcePropType } from "react-native"
import { Settings } from "../../contexts/settingsContext"

export declare interface ObjectForm {
    image: ImageSourcePropType
    width: number
    height: number
    x: number
    y: number
    z: number
    settings: Settings
    scenery?: boolean
    goal?: boolean
}
