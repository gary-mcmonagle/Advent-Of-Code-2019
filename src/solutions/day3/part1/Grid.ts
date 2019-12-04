import { IWirePoint } from "./IWirePoint";
import {Wire} from "./Wire";

export class Grid {
  public wires: Wire[];
  constructor(wires: Wire[]) {
    this.wires = wires;
  }

  public getCrossSections() {
    const crossSections: IWirePoint[] = [];
    for (let i = 0; i < this.wires[0].points.length; i++) {
      for (let j = i; j < this.wires[1].points.length; j++) {
        const wirePointOne = this.wires[0].points[i];
        const wirePointTwo = this.wires[1].points[j];
        if (wirePointOne.xCord === wirePointTwo.xCord && wirePointOne.yCord === wirePointTwo.yCord) {
          crossSections.push(wirePointOne);
          break;
        }
      }
    }
    return crossSections;
  }
}
