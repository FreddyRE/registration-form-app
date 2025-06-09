export const birthDate = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed)
        return 'Birth date is required*';
    const date = new Date(trimmed);
    if (isNaN(date.getTime())) {
        return 'Invalid birth date format.';
    }
    const today = new Date();
    const adultThreshold = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    if (date > adultThreshold) {
        return 'You must be at least 18 years old.';
    }

    return null;

}