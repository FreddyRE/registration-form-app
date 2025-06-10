import type React from "react"
import styles from "./FormField.module.css"

interface FormField {
    label: string,
    name: string,
    value: string,
    type?: string,
    error?: string | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const FormField: React.FC<FormField> = ({
    label,
    name,
    value,
    type = "text",
    error = null,
    onBlur,
    onChange,
}) => {
    return <div className={
        `${styles.formField} ${error ? styles.error : ""}`
    }>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        <div className={styles.errorField}>
            {error ?  error : "\u00A0" }
        </div>
    </div>
}