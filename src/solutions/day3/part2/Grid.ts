
import { IWirePoint } from "./IWirePoint";
import {Wire} from "./Wire";

export class Grid {
  public wires: Wire[];
  constructor(wires: Wire[]) {
    this.wires = wires;
  }

  public getTotalStepsToCrossSection(crossSection: IWirePoint) {
    return (this.getWireIntersectionIndex(this.wires[0], crossSection) + 1) +
     (this.getWireIntersectionIndex(this.wires[1], crossSection) + 1);
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

  private getWireIntersectionIndex(wire: Wire, intersection: IWirePoint) {
    for (let i = 0; i < wire.points.length; i++) {
      if (wire.points[i].xCord === intersection.xCord && wire.points[i].yCord === intersection.yCord) { return i; }
    }
    throw new Error("Could not find point on wire");
  }
}
