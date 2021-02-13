import Magician from '../magician';

test('creating Magician', () => {
  expect(new Magician('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 40, defence: 10, type: 'Magician',
  });
});
