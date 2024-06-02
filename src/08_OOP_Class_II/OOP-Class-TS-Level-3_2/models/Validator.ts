import * as EmailValidator from 'email-validator';
 
EmailValidator.validate("test@email.com");

class Validator {
    static validateEmail(email: string): boolean {
        return EmailValidator.validate(email);
    }
}

export default Validator