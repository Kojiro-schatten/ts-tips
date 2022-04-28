"use strict";
const validateString = (input, index) => {
    const validator = new BracketsValidator();
    for (let i = index; i < input.length; i++) {
        const char = input[i];
        if (!validator.isValidChar(char)) {
            return false;
        }
    }
    return true;
};
class BracketsValidator {
    isValidChar(char) {
        return true;
    }
}
console.log(validateString("()[]{}", 3));
