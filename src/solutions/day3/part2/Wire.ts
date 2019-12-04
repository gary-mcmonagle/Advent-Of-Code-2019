import { IWirePoint } from "./IWirePoint";
import { IWireTracing } from "./IWireTracing";
export class Wire {
  public points: IWirePoint[] = [];
  public tracings: IWireTracing[];
  public intersections: IWirePoint[];

  constructor(tracings: IWireTracing[]) {
    this.tracings = tracings;
    this.traceWire();
  }

  private traceWire() {
    let currentDirection: string = "";
    let xCord: number = 0;
    let yCord: number = 0;
    this.tracings.forEach((tracing) => {
      currentDirection = tracing.direction;
      for (let i = 0; i < tracing.distance; i++) {
        switch (currentDirection) {
          case "R": xCord++;
                    break;
          case "L": xCord--;
                    break;
          case "U": yCord++;
                    break;
          case "D": yCord--;
                    break;
        }
        this.points.push({xCord, yCord});
      }
    });
  }
}
