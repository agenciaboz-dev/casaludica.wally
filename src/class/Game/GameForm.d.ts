import { Settings } from "../../contexts/settingsContext"

export declare interface GameForm {
    theme: ThemeOption
    settings: Settings
    offsetY?: number
}

export declare type ThemeOption = 1
