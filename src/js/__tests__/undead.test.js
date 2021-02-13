import Undead from '../undead';

test('creating Undead', () => {
  expect(new Undead('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 25, defence: 25, type: 'Undead',
  });
});
