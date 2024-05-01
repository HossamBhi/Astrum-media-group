const EMAIL_VALIDATION = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const isValidEmail = (email: string) => email?.match(EMAIL_VALIDATION);
