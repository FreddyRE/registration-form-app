export interface RegistrationFields {
    name: string;
    email: string;
    password : string;
    dateOfBirth: Date;
}

 
export type RegistrationErrors = Partial<Record<keyof RegistrationFields, string>>