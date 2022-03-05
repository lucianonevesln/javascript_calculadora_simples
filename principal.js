
// Funcao em JavaScript para calcular 2 numeros
function calcular() {

    // Aqui se recebem valores a partir do front-end para serem usados na funcao
    var numero1 = document.getElementById("idNumero1").value;
    var numero2 = document.getElementById("idNumero2").value;
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;

    // Aqui é selecionado uma operacao matematica simples que vai calcular os valores digitados pelo usuario
    switch (operacao) {
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
    };

    // Aqui é exibido uma mensagem ao usuario mostrando os valores digitados e o resultado
    alert("O resultado do número: " + 
           numero1 + " " + operacao + " " + 
           numero2 + " " + 
           " é: " + " " + 
           resultado);
}
