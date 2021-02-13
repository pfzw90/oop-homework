import Archer from '../archer';

test('creating Archer', () => {
  expect(new Archer('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 25, defence: 25, type: 'Archer',
  });
});
