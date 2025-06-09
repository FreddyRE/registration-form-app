export const password = (value:string) => {
    const trimmed = value.trim();
    if(!trimmed)
        return 'Password is required*';
    if(value.length < 6)
        return "Password must be at least 6 characters.";
    return null
}