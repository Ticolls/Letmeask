import copyImg from '../assets/images/copy.svg'
import { useDarkMode } from '../hooks/useDarkMode'

import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    const { toggle } = useDarkMode()

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className={`room-code ${toggle ? 'dark-mode' : ''}`} onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #-Mj_w_lrabb-T7ygeL1m</span>
        </button>
    )
}