import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
    this.type = 'Magician';
  }
}
