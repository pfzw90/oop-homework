import Character from './character';

export default class Archer extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defence = 25;
    this.type = 'Archer';
  }
}
