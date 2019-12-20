import { IntCodeMemory } from "./IntCodeMemory";
import { Opcode } from "./Opcode";

export class IntCodeProgram {
  private memory: IntCodeMemory;
  private instructionPointer: number = 0;
  private instructionLengths = {
    1: 4,
    2: 4,
    3: 2,
    4: 2,
    99: 1,
  };
  private output = [];

  constructor(initialMemoryState: number[]) {
    this.memory = new IntCodeMemory(initialMemoryState);
    let isExecuting = true;
    while (isExecuting) {
      isExecuting = this.executeNextInstruction();
      console.log(this.output);
    }
  }

  private executeNextInstruction() {
    console.log("index");
    console.log(this.instructionPointer);
    const opcode = this.parseOpcode();
    const instructionLength = this.instructionLengths[opcode.executionId.toString()];
    console.log(instructionLength);
    const instruction = this.createInstruction(opcode, instructionLength);
    console.log(`****Instruction****`);
    console.log(instruction);
    switch (instruction[0]) {
      case 1:
        this.memory.updateAtAddress(instruction[3], instruction[1] + instruction[2]);
        break;
      case 2:
        this.memory.updateAtAddress(instruction[3], instruction[1] * instruction[2]);
        break;
      case 3:
        this.memory.updateAtAddress(instruction[1], 1);
        break;
      case 4:
        this.output.push(instruction[1]);
      case 99:
        return false;
    }
    this.instructionPointer += instructionLength;
    return true;
  }

  private parseOpcode() {
    const formatted = this.formatRawOpcode(this.memory.getAtAddress(this.instructionPointer)).split("").map((f) => Number(f));
    const executionId = Number(`${formatted[3]}${formatted[4]}`);
    const paramModes = [formatted[0], formatted[1], formatted[3]];
    return new Opcode(executionId, paramModes);
  }

  private formatRawOpcode(opcode: number) {
    const neededLength = 5;
    let asString = opcode.toString();
    while (asString.length < neededLength) {
      asString = "0" + asString;
    }
    return asString;
  }

  private createInstruction(opcode: Opcode, instructionLength: number) {
    const instruction = [opcode.executionId];
    // console.log(opcode.paramModes)
    for (let i = 1; i < instructionLength; i++) {
      const paramMode = opcode.paramModes[i - 1];
      const immediate = this.memory.getAtAddress(this.instructionPointer + i);
      if (paramMode === 0) { instruction.push(this.memory.getAtAddress(immediate)); }
      if (paramMode === 1) { instruction.push(immediate); }
    }
    return instruction;
  }
}
