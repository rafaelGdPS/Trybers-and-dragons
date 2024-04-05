import Race from './Race';

class Elf extends Race {
  private static _instanceCalled = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCalled += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instanceCalled;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;