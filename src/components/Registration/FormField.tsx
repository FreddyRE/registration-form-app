import type React from "react"
import styles from "./FormField.module.css"

interface FormField {
    label: string,
    name: string,
    value: string,
    type?: string,
    error?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const FormField: React.FC<FormField> = ({
    label,
    name,
    value,
    type = "text",
    error,
    onChange,
}) => {
    return <div className={styles.formField}>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type} 
            name={name}
            id={name}
            value={value}
            onChange={onChange}
        />
    </div>
}