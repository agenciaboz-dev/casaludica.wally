import { ImageSourcePropType } from "react-native"
import { Settings } from "../../contexts/settingsContext"

export declare interface ObjectForm {
    image: ImageSourcePropType
    settings: Settings
    scenery?: boolean
    offsetY?: number
    goal?: boolean
}
