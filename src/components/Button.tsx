import { ButtonHTMLAttributes } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {

    const { toggle } = useDarkMode()
    const typ = props.type

    return (
        <button
            className={`button ${isOutlined ? 'outlined' : ''} ${toggle && typ !== "submit" ? 'dark-mode' : ''}`}
            {...props}>

        </button>
    )
}

