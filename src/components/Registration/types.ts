export interface RegistrationFields {
    name: string;
    email: string;
    password : string;
    dateOfBirth: string;
}

 
export type RegistrationErrors = Partial<Record<keyof RegistrationFields, string>>