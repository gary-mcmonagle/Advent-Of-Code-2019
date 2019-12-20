export class Opcode {
  public executionId: number;
  public paramModes: number[];
  constructor(executionId: number, paramModes: number[]) {
    this.executionId = executionId;
    this.paramModes = paramModes;
    this.validateInput();
  }
  private validateInput() {
    const permittedExecutionIds = [1, 2, 3, 4, 99];
    const permittedParamModes = [0, 1];
    if (!permittedExecutionIds.includes(this.executionId)) { throw new Error(`Invalid execution id ${this.executionId}`); }
    this.paramModes.forEach((pm) => {
      if (!permittedParamModes.includes(pm)) { throw new Error(`Invalid param mode ${pm}`); }
    });
  }
}
