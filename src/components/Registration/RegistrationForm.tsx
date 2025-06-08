import { useState, type ChangeEvent } from "react"
import type { RegistrationErrors, RegistrationFields } from "./types"
import { FormField } from "./FormField"
import styles from './RegistrationForm.module.css'

const initialFields: RegistrationFields = {
    name: "",
    email: "",
    password: "",
    dateOfBirth: new Date()
}

export const RegistrationForm = () => {
    const [fields, setFields] = useState<RegistrationFields>(initialFields);
    const [errors, setErrors] = useState<RegistrationErrors>({})
    const [touched, setTouched] = useState<Partial<Record<keyof RegistrationFields, boolean>>>({});
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (field: keyof RegistrationFields) => (e: ChangeEvent<HTMLInputElement>) => {
        const newFieldsValues = { ...fields, [field]: e.target.value }

        console.log("kldldldl")
        setFields(newFieldsValues)
    }


    return <form>
        <h2>Sign Up</h2>

        <FormField
            label="Full Name"
            value={fields.name}
            name="name"
            onChange={handleChange("name")} />
        <FormField
            label="email"
            value={fields.email}
            name="email"
            onChange={handleChange("email")} 
            type="email"
        />
        <FormField
            label="password"
            value={fields.password}
            name="pass"
            onChange={handleChange("password")} 
            type="password"
        />

        <button type="submit">Register</button>
        <div className={styles.successMessage}>Registration successfully! </div>

    </form>


} 