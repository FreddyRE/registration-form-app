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
        errors
    } = useForm(initialFields)
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("to do ")

    }


    return <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <FormField
            label="Full Name"
            value={values.name}
            name="name"
            onChange={(e) => errors.name ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.name !== null}
        />
        <FormField
            label="email"
            value={values.email}
            name="email"
            type="email"
            onChange={(e) => errors.email ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.email !== null}

        />
        <FormField
            label="password"
            value={values.password}
            name="password"
            type="password"
            onChange={(e) => errors.password ? handleChangeWithValidation(e) : handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.password !== null}

        />
        <FormField
            label="Date Of Birth"
            value={values.dateOfBirth}
            name="dateOfBirth"
            type="date"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            error={errors.dateOfBirth !== null}

        />

        <button className={styles.submitButton} type="submit">Register</button>


        {Object.entries(errors).map(
            ([field, message]) =>
                message && (
                    <div key={field} className={styles.errorMessage}>
                        - {message}
                    </div>
                )
        )}


        {/* <div className={styles.successMessage}>Registration successfully! </div> */}

    </form>


} 