document.getElementById('calculateButton').addEventListener('click', function() {
    let number = document.getElementById('numberInput').value;
    document.getElementById('result').innerText = `Factorial: ${calculateFactorial(number)}`;
});

function calculateFactorial(n) {
    if (n === 0 || n === 1) return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

