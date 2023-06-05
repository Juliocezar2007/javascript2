var listaCarros = []

//Declarando um objeto e informando os atributos 
//Todo objeto declarando com { }
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'vw',
}
//para exibir o atributo do objeto faço da seguinte forma objeto.atributo
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano}  - ${carro.modelo}`)

//Adicionando o objeto carro ao vetor listacarros
listaCarros.push(carro)
console.log (listaCarros.length) //1 - só existe 1 item

//novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM',
}
listaCarros.push(carro)
console.log (listaCarros)

for (var andar in listaCarros){
    console.log ( listacarros[andar].modelo )
}
