import { createContext, ReactNode, useState } from "react";

type DarkModeContextProviderProps = {
    children: ReactNode,
}

type DarkModeContextType = {
    toggle: boolean,
    triggerToggle: () => void
}

export const DarkModeContext = createContext({} as DarkModeContextType)

export function DarkModeContextProvider(props: DarkModeContextProviderProps) {

    const [toggle, setToggle] = useState(false)

    function triggerToggle() {
        setToggle(!toggle)
    }

    return (
        <DarkModeContext.Provider value={{ toggle, triggerToggle }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}