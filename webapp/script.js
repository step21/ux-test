function calculateFactorial() {
  const number = parseInt(document.getElementById('number').value);
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  document.getElementById('result').textContent = `Factorial of ${number} is: ${factorial}`;
}

