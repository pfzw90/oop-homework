import Swordsman from '../swordsman';

test('creating Swordsman', () => {
  expect(new Swordsman('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 40, defence: 10, type: 'Swordsman',
  });
});
