// dado que eu recebo uma entrada que representa um valor em dolares
// Diga qual valor em reais

function converteDolarEmReal(valor) {
  const dolar = valor
  const real = dolar * 4.92
  return `USD ${valor} dolares equivalem a R$ ${real} reais`
}

converteDolarEmReal(500)
