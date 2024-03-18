import { createContext, useState } from "react"
import React from "react"

interface Result {
    elapsed_time: string
    errors: number
}

export interface Results {
    1: Result
    2: Result
    3: Result
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
        "1": {
            elapsed_time: "",
            errors: 0,
        },
        "2": {
            elapsed_time: "",
            errors: 0,
        },
        "3": {
            elapsed_time: "",
            errors: 0,
        },
    })

    return <ResultsContext.Provider value={{ results, setResults }}>{children}</ResultsContext.Provider>
}
