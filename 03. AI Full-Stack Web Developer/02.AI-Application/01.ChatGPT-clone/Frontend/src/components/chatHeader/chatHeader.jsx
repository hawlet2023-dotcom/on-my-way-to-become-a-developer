import { ChevronDown } from 'lucide-react'
import styles from './chatHeader.module.css'

function ChatHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <span>chatGpt</span>
                <chevronDown size={16}/>
            </div>
            <div className={styles.right}>
                <div className={styles.avatar}IT></div>
            </div>
        </header>
    )
}
export default ChatHeader