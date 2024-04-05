import Race from './Race';

class Orc extends Race {
  private static _instanceCalled = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instanceCalled += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCalled;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;