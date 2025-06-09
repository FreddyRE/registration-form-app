const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


export const email = (value:string) => {
    const trimmed = value.trim();
    if(!trimmed)
        return 'Email is required*';
    if(!regexEmail.test(value))
        return "Invalid email address.";
    return null
}