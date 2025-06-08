import type { PropsWithChildren } from "react"
import type React from "react"
import styles from './Card.module.css'

export const Card: React.FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.card}>{children}</div>
}