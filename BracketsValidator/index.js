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
    constructor() {
        this.bracketPairs = {
            '{': '}',
            '[': ']',
            '(': ')',
        };
        this.openBrackets = new Set(Object.keys(this.bracketPairs));
        this.closingBrackets = new Set(Object.values(this.bracketPairs));
        this.stack = [];
    }
    isValidChar(char) {
        if (this.isNotBracket(char)) {
            return true;
        }
        if (this.isOpeningBracket(char)) {
            this.push(char);
            return true;
        }
        if (this.hasMatchFor(char)) {
            this.pop();
            return true;
        }
        return false;
    }
    push(bracket) {
        this.stack.push(bracket);
    }
    pop() {
        return this.stack.pop();
    }
    lastFromStack() {
        return this.stack.slice(-1)[0];
    }
    hasMatchFor(bracket) {
        const previousBracket = this.lastFromStack();
        if (undefined === previousBracket) {
            return false;
        }
        const match = this.matchFor(bracket);
        if (previousBracket !== match) {
            return false;
        }
        return true;
    }
    isOpeningBracket(char) {
        if (this.openBrackets.has(char)) {
            return true;
        }
        return false;
    }
    isClosingBracket(char) {
        if (this.closingBrackets.has(char)) {
            return true;
        }
        return false;
    }
    isNotBracket(char) {
        if (this.isOpeningBracket(char)) {
            return false;
        }
        if (this.isClosingBracket(char)) {
            return false;
        }
        return true;
    }
    matchFor(bracket) {
        const index = Object.values(this.bracketPairs).indexOf(bracket);
        return Object.keys(this.bracketPairs)[index];
    }
}
console.log(validateString('{([])}', 0));
console.log(validateString('a(b[d{a+b]/2]/4)/1', 0));
