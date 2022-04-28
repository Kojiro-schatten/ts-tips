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
  private readonly bracketPairs: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  private readonly openBrackets: Set<string> = new Set(Object.keys(this.bracketPairs));
  private readonly closingBrackets: Set<string> = new Set(Object.values(this.bracketPairs));
  private stack: string[] = [];
  public isValidChar(char: string): boolean {
    if(this.isNotBracket(char)) {
      return true;
    }
    if(this.isOpeningBracket(char)) {
      this.push(char);
      return true;
    }
    if(this.hasMatchFor(char)) {
      this.pop();
      return true;
    }
    return false;
  }

  private push(bracket: string): void {
    this.stack.push(bracket);
  }

  private pop(): string | undefined {
    return this.stack.pop();
  }

  private lastFromStack(): string | undefined {
    return this.stack.slice(-1)[0];
  }

  private hasMatchFor(bracket: string): boolean {
    const previousBracket: string | undefined = this.lastFromStack();
    if(undefined === previousBracket) {
      return false;
    }
    const match = this.matchFor(bracket);
    if(previousBracket !== match) {
      return false;
    }
    return true;
  }

  private isOpeningBracket(char: string): boolean {
    if(this.openBrackets.has(char)) {
      return true;
    }
    return false;
  }

  private isClosingBracket(char: string): boolean {
    if(this.closingBrackets.has(char)) {
      return true;
    }
    return false;
  }

  private isNotBracket(char: string): boolean {
    if(this.isOpeningBracket(char)) {
      return false;
    }
    if(this.isClosingBracket(char)) {
      return false;
    }
    return true;
  }

  private matchFor(bracket: string): string {
    const index: number = Object.values(this.bracketPairs).indexOf(bracket);
    return Object.keys(this.bracketPairs)[index];
  }
}

console.log(validateString('{([])}', 0));
console.log(validateString('a(b[d{a+b]/2]/4)/1', 0));