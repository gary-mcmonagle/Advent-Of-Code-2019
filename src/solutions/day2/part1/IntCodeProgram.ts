export class IntCodeProgram {
  public opcodes: number[];

  constructor(opcodes) {
    this.opcodes = opcodes;
  }

  public execute() {
    let opcodePosition = 0;
    do {
      this.opcodes[this.opcodes[opcodePosition + 3]] = this.opcodes[opcodePosition] === 1 ?
      this.opcodes[this.opcodes[opcodePosition + 1]] + this.opcodes[this.opcodes[opcodePosition + 2]] :
      this.opcodes[this.opcodes[opcodePosition + 1]] * this.opcodes[this.opcodes[opcodePosition + 2]];
      opcodePosition += 4;
    } while (this.opcodes[opcodePosition] !== 99);
  }
}
