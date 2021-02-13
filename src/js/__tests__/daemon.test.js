import Daemon from '../daemon';

test('creating Daemon', () => {
  expect(new Daemon('ivan')).toEqual({
    name: 'ivan', health: 100, level: 1, attack: 10, defence: 40, type: 'Daemon',
  });
});
