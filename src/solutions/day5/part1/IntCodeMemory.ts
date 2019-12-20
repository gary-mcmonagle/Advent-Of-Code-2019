export class IntCodeMemory {
  private memory: number[];

  constructor(initialMemoryState: number[]) {
    this.memory = initialMemoryState;
  }

  public getAtAddress(address: number) {
    if (address < 0 || address >= this.memory.length) {
      throw new Error(`Could not get memory address ${address}`);
    }
    console.log(`Getting memory from address ${address}`);
    return this.memory[address];
  }
  public updateAtAddress(address: number, value: number) {
    console.log(`Updating address ${address} with ${value}`);
    this.memory[address] = value;
  }
}
