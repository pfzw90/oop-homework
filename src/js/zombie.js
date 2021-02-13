import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
    this.type = 'Zombie';
  }
}
