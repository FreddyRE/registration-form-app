import React, { useState, type ChangeEvent } from "react"
import { type RegistrationFields } from "../components/Registration/types"
import { registrationFormValidators } from "../validators/registratiorFormValidators"



const initialErrors: Record<keyof RegistrationFields, null | string> = {
    name: null,
    email: null,
    password: null,
    dateOfBirth: null
}

const initialTouched: Record<keyof RegistrationFields, boolean> = {
    name: false,
    email: false,
    password: false,
    dateOfBirth: false
}

export function useForm<RegistrationFields>(initialValues: RegistrationFields) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [touched, setTouched] = useState(initialTouched)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }


    const handleChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setValues({ ...values, [name]: value })

        if (name in registrationFormValidators) {
            const field = name as keyof typeof registrationFormValidators;
            const errMessage = registrationFormValidators[field](value)
            setErrors({ ...errors, [field]: errMessage })

        }

    }


    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name in registrationFormValidators) {
            const field = name as keyof typeof registrationFormValidators;
            const errMessage = registrationFormValidators[field](value)
            setErrors({ ...errors, [field]: errMessage })

            if (!touched[field]) {
                setTouched({ ...touched, [field]: true })

            }

        }

    }




    return {
        values,
        handleChange,
        handleChangeWithValidation,
        handleBlur,
        touched,
        errors

    }

}