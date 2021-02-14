import Archer from '../archer';

test('creating wrong name', () => {
  expect(() => new Archer('')).toThrowError(new Error('Имя персонажа должно быть строкой и содержать от 2 до 10 символов'));
  expect(() => new Archer('aaaaaaaaaaa')).toThrowError(new Error('Имя персонажа должно быть строкой и содержать от 2 до 10 символов'));
  expect(() => new Archer(0)).toThrowError(new Error('Имя персонажа должно быть строкой и содержать от 2 до 10 символов'));
});

test('taking damage', () => {
  const testChar = new Archer('ivan');
  testChar.damage(10);
  expect(testChar.health).toEqual(100 - 10 * (1 - testChar.defence / 100));

  testChar.damage((testChar.health + 1) / (1 - testChar.defence / 100));
  expect(testChar.health).toEqual(0);

  testChar.health = -1;
  expect(() => testChar.damage(1)).toThrowError(new Error('Потыкайте его палочкой. Он по поху уже сдох.'));
});


test('leveling up', () => {
  const testChar = new Archer('ivan');
  testChar.levelUp();
  expect(testChar).toEqual({
    name: 'ivan', health: 100, level: 2, attack: 25 * 1.2, defence: 25 * 1.2, type: 'Archer',
  });

  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего!'));
});
