import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(

    private _fighter1: SimpleFighter,
    private _fighter2: SimpleFighter,
  ) {
    super(_fighter1);
    this._fighter1 = _fighter1;
    this._fighter2 = _fighter2;
    super.fight();
  }

  fight(): number {
    let result = 0;
    while (result === 0) {
      this._fighter1.attack(this._fighter2);
      if (this._fighter2.lifePoints <= 0) {
        result = 1;
      }
      this._fighter2.attack(this._fighter1);
      if (this._fighter1.lifePoints <= 0) {
        result = -1;
      }
    }
    return result;
  }
}

export default PVP;