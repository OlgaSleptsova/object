import orderByProps from '../app.js'



test('orderByProps', () => {

  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
const myarray = ["name", "level"]
const result2 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 }
]


  const x = orderByProps(obj,myarray);
    
  expect(x).toEqual(result2)

  });

 