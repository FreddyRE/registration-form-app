import { useState } from "react"
import type { RegistrationFields } from "./types"
import { FormField } from "./FormField"
import styles from './RegistrationForm.module.css'
import { useForm } from "../../hooks/useForm"

const initialFields: RegistrationFields = {
    name: "",
    email: "",
    password: "",
    dateOfBirth: ""
}

export const RegistrationForm = () => {

    const {
        values,
        handleChange,
        handleChangeWithValidation,
        handleBlur,
        touched,
        errors
    } = useForm(initialFields)
    const [valid, setValid] = useState(false)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(valid) {
            console.log("To do")
        }

    }


    return <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <FormField
            label="Full Name"
            value={values.name}
            name="name"
            onChange={(e) => touched.name ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.name}
        />
        <FormField
            label="email"
            value={values.email}
            name="email"
            type="email"
            onChange={(e) => touched.email ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.email}

        />
        <FormField
            label="password"
            value={values.password}
            name="password"
            type="password"
            onChange={(e) => touched.password ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.password}

        />
        <FormField
            label="Date Of Birth"
            value={values.dateOfBirth}
            name="dateOfBirth"
            type="date"
            onChange={(e) => handleChangeWithValidation(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.dateOfBirth}

        />

        <button
            className={`${styles.submitButton}  ${!valid && styles.disabled}`}
            type="submit">Register
        </button>



        {/* <div className={styles.successMessage}>Registration successfully! </div> */}

    </form>


} 