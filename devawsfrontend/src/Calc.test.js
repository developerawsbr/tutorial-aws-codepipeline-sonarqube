import Calc from './Calc';

test('validando os metodos da classe Calc', () => {
    const calc = new Calc();
    expect(calc.sum(1,1)).toBe(2);
    expect(calc.sub(2,1)).toBe(1);
  });
  