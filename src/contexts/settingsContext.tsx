import { createContext, useState } from "react"
import React from "react"

export interface Settings {
    goals: number
    objects: number
    scenery: number
    scenery_scale: number
    size: number
    offsetBottom: number
    offsetTop: number
}

interface SettingsContextValue {
    settings: Settings
    setSettings: (value: Settings) => void
}

interface SettingsProviderProps {
    children: React.ReactNode
}

const SettingsContext = createContext<SettingsContextValue>({} as SettingsContextValue)

export default SettingsContext

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>({
        goals: 2,
        objects: 50,
        size: 60,
        scenery: 10,
        scenery_scale: 1.5,
        offsetBottom: 170,
        offsetTop: 120,
    })

    return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>
}
