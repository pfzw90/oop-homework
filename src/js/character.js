export default class Character {
  constructor(name) {
    if (!(name.length < 11 && name.length > 1) || !(typeof name === 'string')) {
      throw new Error('Имя персонажа должно быть строкой и содержать от 2 до 10 символов');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) throw new Error('Нельзя повысить левел умершего!');
    this.health = 100;
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health < 0) throw new Error('Потыкайте его палочкой. Он по поху уже сдох.');

    const dmg = points * (1 - this.defence / 100);
    if (this.health > dmg) this.health -= dmg;
    else this.health = 0;
  }
}
