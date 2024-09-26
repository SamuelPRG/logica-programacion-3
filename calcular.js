function factorial() {
    const numero = parseInt(document.getElementById("numero").value);
    

    function calculateFactorial(number) {
        if (number < 0 || !Number.isInteger(number)) {
            return "Input must be a non-negative integer";
        }
        
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }

    const resultado = calculateFactorial(numero);
    
    document.getElementById('resultado').innerHTML = resultado;
}