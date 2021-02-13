import Zombie from '../zombie';

test('creating Zombie', () => {
  expect(new Zombie('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 40, defence: 10, type: 'Zombie',
  });
});
