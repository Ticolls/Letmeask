import { useDarkMode } from '../hooks/useDarkMode'
import '../styles/dark-mode-toggle.scss'


export function DarkModeToggle() {

    const { toggle, triggerToggle } = useDarkMode()

    return (
        <button onClick={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                </div>
                <div className="wrg-toggle-uncheck">
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </button>
    )
}