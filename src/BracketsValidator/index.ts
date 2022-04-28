const validateString = (input: string, index: number): boolean => {
  const validator = new BracketsValidator();
  for(let i = index; i < input.length; i++) {
    const char = input[i];
    if(!validator.isValidChar(char)) {
      return false;
    }
  }
  return true;
}

class BracketsValidator {
  public isValidChar(char: string): boolean {
    return true;
  }
}

console.log(validateString("()[]{}", 3));