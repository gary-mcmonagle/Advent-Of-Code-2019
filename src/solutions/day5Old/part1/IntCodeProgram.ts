import {IntCodeMemory} from "./IntCodeMemory";
import {IOptCode} from "./IOptCode";
export class IntCodeProgram {
  public requiredNoParams = {
    1: 3,
    2: 3,
    3: 1,
    4: 1,
    99: 0,
  };
  public memory: number[];
  public currentInstructionIndex: number = 0;
  public outputs: number[];

  constructor(initialMemoryState: number[]) {
    this.memory = initialMemoryState;
    // this.performInstruction()
  }

  public execute() {
    let running = true;
    // this.performInstruction()
    let count = 0;
    do {
      console.log(this.memory[6]);
      // console.log(this.currentInstructionIndex)
      running = this.performInstruction();
      count++;
    }while (running && count <= 3);
  }

  private performInstruction() {
    const opcode: IOptCode = this.parseCurrentOpcode();
    if (opcode.id == 99) { return false; }
    const params: number[] = this.getParams(opcode);
    switch (opcode.id) {
      case 1:
        console.log(params);
        this.memory[params[3]] = params[0] + params[1];
        break;
      case 2:
        this.memory[params[3]] = params[0] + params[1];
        break;
      case 3: this.memory[params[0]] = 3;
              break;
      case 4: this.outputs.push(params[0]);
              break;
      default:
      console.log(this.currentInstructionIndex);
      throw new Error(`Bad opcode recieved ${opcode.id}`);
    }
    this.currentInstructionIndex += params.length + 1;
    return true;
  }

  private getParams(opcode: IOptCode) {
    const numParams = this.requiredNoParams[opcode.id.toString()];
    const params = [];
    for (let i = 0; i < numParams; i++) {
      const immediateValue = this.memory[this.currentInstructionIndex + (i + 1)];
      if (opcode.paramModes[i] === 0) {
        params.push(this.memory[immediateValue]);
      } else if (opcode.paramModes[i] === 1) {
        params.push(immediateValue);
      } else {
        throw new Error(`Bad param type received ${opcode.paramModes[i]}`);
      }
    }
    params.forEach((p) => {
      // let asBool = !!p
      if (!p && p !== 0) { throw new Error(`bad p ${p}`); }
    });
    return params;
  }

  private parseCurrentOpcode() {
    let asString: string =  this.memory[this.currentInstructionIndex].toString();
    do {
      asString = "0" + asString;
    } while (asString.length < 5);
    // console.log(asString)
    const split = asString.split("").map((n) => Number(n));
    const id = Number(`${split[3]}${split[4]}`);
    const paramModes = [split[2], split[1], split[0]];
    return {id, paramModes};

  }

}
