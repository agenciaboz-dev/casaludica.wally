import { createContext, useState } from "react"
import React from "react"

export interface Settings {
    goals: number
    objects: number
    scenery: number
    scenery_scale: number
    size: number
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
    const [settings, setSettings] = useState<Settings>({ goals: 2, objects: 100, size: 50, scenery: 10, scenery_scale: 1 })

    return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>
}
