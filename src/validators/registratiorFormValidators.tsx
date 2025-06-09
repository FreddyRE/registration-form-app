import {type RegistrationFields} from "../components/Registration/types"
import { birthDate } from "./birthDate";
import { email } from "./email";
import { fullName } from "./fullName"
import { password } from "./password";


type ValidatorFn = (value: string) => string | null;

export const registrationFormValidators: Record<keyof RegistrationFields, ValidatorFn> = {
    name : fullName,
    email :email,
    password: password,
    dateOfBirth:birthDate

}