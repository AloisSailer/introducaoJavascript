// dado que eu recebo um numero de entrada
// quero dizer se ele é par ou ímpar

function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par`
  } else {
    return `${numero} é impar`
  }
}

parOuImpar(587)
