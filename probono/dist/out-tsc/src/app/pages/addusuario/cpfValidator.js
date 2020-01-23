var cpfValidator = /** @class */ (function () {
    function cpfValidator() {
    }
    cpfValidator.validaCPF = function (control) {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (control.value.length < 11)
            return false;
        for (i = 0; i < control.value.length - 1; i++)
            if (control.value.charAt(i) != control.value.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = control.value.substring(0, 9);
            digitos = control.value.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = control.value.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    };
    return cpfValidator;
}());
export { cpfValidator };
//# sourceMappingURL=cpfValidator.js.map