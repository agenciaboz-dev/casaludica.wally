import { createContext, useState } from "react"
import React from "react"

export interface Results {
    stage1_elapsed_time: string
    stage1_errors: number

    stage2_elapsed_time: string
    stage2_errors: number

    stage3_elapsed_time: string
    stage3_errors: number
}

interface ResultsContextValue {
    results: Results
    setResults: (value: Results) => void
}

interface ResultsProviderProps {
    children: React.ReactNode
}

const ResultsContext = createContext<ResultsContextValue>({} as ResultsContextValue)

export default ResultsContext

export const ResultsProvider: React.FC<ResultsProviderProps> = ({ children }) => {
    const [results, setResults] = useState<Results>({
        stage1_elapsed_time: "00:00",
        stage1_errors: 0,

        stage2_elapsed_time: "00:00",
        stage2_errors: 0,

        stage3_elapsed_time: "00:00",
        stage3_errors: 0,
    })

    return <ResultsContext.Provider value={{ results, setResults }}>{children}</ResultsContext.Provider>
}
