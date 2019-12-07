import {Orbital} from "./Orbital";
export class Galaxy {
  public orbitals: Orbital[] = [new Orbital("COM", null)];

  constructor(orbitals: Orbital[]) {
    this.orbitals = this.orbitals.concat(orbitals);
  }

  public getGalaxyTotalOrbits() {
    let total = 0;
    this.orbitals.forEach((o) => {
      total += this.getTotalOrbits(o);
    });
    return total;
  }

  public getDistanceBetweenOrbits(orbitIDOne: string, orbitIdTWo) {

  }

  private getTotalOrbits(orbital: Orbital) {
    let total = 0;
    let parent = orbital.orbits;
    while (!!parent) {
      total++;
      parent = this.getOrbitById(parent).orbits;
    }
    return total;
  }

  private getOrbitById(id: string) {
    return this.orbitals.filter((o) => o.id === id)[0];
  }

}
