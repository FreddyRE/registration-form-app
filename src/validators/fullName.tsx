const regexFullName = /^[A-Za-zÀ-ÿ'-]+(\s[A-Za-zÀ-ÿ'-]+)+$/;


export const fullName = (value:string) => {
    const trimmed = value.trim();
    if(!trimmed)
        return 'Full name is required*';
    if(!regexFullName.test(value))
        return "Enter at least first name and last name.";
    return null
}