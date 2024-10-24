const FizzBuzz = require('./fizzbuzz');

test('Número divisível por 3', () => {
  // Preparar
  let número = 9;
  let fizzBuzz = new FizzBuzz();

  // Executar
  let resultado = fizzBuzz.calculate(número);

  // Verificar
  expect(resultado).toBe('Fizz');
});


test('Número divisível por 3', () => {
    // Preparar
    let número = 12;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe('Fizz');
});


test('Número divisível por 5', () => {
    // Preparar
    let número = 10;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe('Buzz');
});


test('Número divisível por 5', () => {
    // Preparar
    let número = 50;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe('Buzz');
});


test('Número divisível por 3 e 5', () => {
    // Preparar
    let número = 60;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe('FizzBuzz');
});


test('Número divisível por 3 e 5', () => {
    // Preparar
    let número = 120;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe('FizzBuzz');
});


test('Número não é divisível por 3 e 5', () => {
    // Preparar
    let número = 4;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe(número.toString());
});


test('Número não é divisível por 3 e 5', () => {
    // Preparar
    let número = 43;
    let fizzBuzz = new FizzBuzz();
 
    // Executar
    let resultado = fizzBuzz.calculate(número);
 
    // Verificar
    expect(resultado).toBe(número.toString());
});


