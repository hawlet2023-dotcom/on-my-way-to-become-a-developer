import { ChevronDown } from 'lucide-react'
import styles from './chatHeader.module.css'

function ChatHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <span>chatGpt</span>
                <ChevronDown size={16}/>
            </div>
            <div className={styles.right}>
                <div className={styles.avatar}>MA</div>
            </div>
            <div/>
        </header>
    )
}
export default ChatHeader