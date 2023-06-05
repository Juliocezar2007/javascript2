 /*
            comentario em 
            multiplas linhas
        */       
       //comentario em uma única linha
       
       //O alert é utilizado para exibir uma mensagem em pppp
       alert("olá mundo ! ! !") 
    

       //No console conseguimos visualizar informações
       //sem exibir na pagina
       console.log("Olá mundo ! ! ! utilizando console")
   
       //criando uma função chamada quando clicamos no botão
       function Botaoteste(){
           alert("voçe clicou no botao")
       }
   
       function Botaoteste() {
           alert("voçe clicou no botao")
       }
       //Declarando variaveis
       //Strlng - conjunto de caracteres - Declarar com "" ou ""
       var nome =  "julio"
       var sobrenome = "moreira"
       //number - todo numero em 25 é do tipo number - Declarar sem ""
       var idade = 35
       //boolean - somente recebe true ou falso
       var aprovado = true
   
       console.log (typeof nome) //comando typeof para saber o tipo do dado
   
       console.log (nome + '' + sobrenome) //concatenando strings com o +*/
       //se utilizamos o + com string ele concatena se utilizar com numbler soma
       var n1 =10
       var n2 =25
       console.log (n1 + n2) //ira somar as 2 variaveis number (35)
       var n3 = "10"
       var n4 = "25"
       console.log (n3 + n4) //ira concatnear "juntar as 2 variaveis ("1025")"
   
       n1 = n2 //uma variavei pode receber o valor de outra variavel
       console.log ("n1 = " + n1 + 'e o n2 =' + n2)
       var salario =1290.85 // para atribuir o valor decimal utilizar. não.
       salario = salario + 200 //posso tambem somar a variavel com ela mesmo
       console.log (salario)
       salario += 200 //representação mais simplificada da expressão acima
       console.log (salario)
   
       //antigamente para juntar texto e variaveis faziamos assim
       console.log ('ola, ' + nome + 'voçe tem' + idade + 'anos e recebe R$' + salario)
       //hoje utilizamos o templateSting forma mais simples
       console.log (`ola, ${nome} voce tem ${idade} anos e recebe R$ ${salario}`)
   
       //Função do botao para obter o nome
       function BotaoNome() {
           //no prompt abre opção para digitar algo
           var nome2 =prompt('Qual é o seu nome?')
           //o confirm abre texto com opção ok e cancel
           confirm(`ola,${nome2} enteude js?`)    
       }
   
       function Botaosomar(){
           //receber valor1 de um prompt
           var valor1 = prompt("informe o valor 1:")
           //receber valor2 de um prompt
           var valor2 = prompt("informe o valor 2:")
           //variave1 soma receber valor1 + valor2
           var somar = Number(valor1) + Number(valor2)
           //Exibir em um alert o valor de soma
           //alert(`A soma entre ${valor1} e ${valor2} é: ${somar}`)
   
           //alterando um elemento buscando ele pelo id e alterando
           //o conteudo do HTML, podemos ler da seguinte forma
           //no documento pegar o elemento pelo id resultadosoma e
           //alterando o conteudo do HTML pela string
            document.getElementById("resultadodaSoma").innerHTML += 
           `<br> A soma dos numeros ${valor1} e ${valor2} é = ${somar}`
       }
           function botaocidade(){
               //variavel nomecidade recebendo o conteudo digitado no Input
               var nomecidade = document.getElementById("cidade").value
               document.getElementById("resultadocidade").innerHTML = nomecidade
        }

          //operadores aritimeticas e ordem de precendência 
          var opeSoma = 5 + 2 //operador de soma +
          console.log(opSoma)
          var opSubtracao = 5 - 2 //operador de subtração -
          console.log(opSubtracao)//3
          var opMultiplicacao = 5 * 2 //operador de multiplicacao
          console.log(opMultiplicacao) //10
          var opDivisao = 5/2 // oérador de divisao
          console.log(opDivisao) //2.5

          var opexponenciano = 5 ** 2 //operador de exponenciano
          console.log(opexponenciano) //25
          var opresto = 5 % 2 //operador de resto da divisao
          console.log(opresto)//1

          //ordem de precendencia
          var ordemPrecendencia = 5 + 3 / 2
          console.log(ordemPrecedencia1) //6.5
          var ordemPrecedencia2 = (5 + 3) /2
          console.log(ordemPrecedencia2) //4
          /* 1° ()
            2° **
            3° * /
            4° % 
            5° + -
            */
           
            //constantes - o valor nao pode ser alterado depois de atribuido
            const p1 = 3.13
            // pi = 3 - se o valor for alterado dara erro no javascript
            //auto atribuição
            var n = 3
            n = n + 3 //a variavel recebe ela mesmo + 3
            n += 3 //quer dizer o mesmo que a expressão acima

            n++ // quando precisarmos somar +1 ao valor da variavel
            n-- // quando prescisarmos subtrair -1 ao valor da variavel

            //operadores relacionais
            var n1= 5
             var n2 = 6
            console.log (n1 > n2)// > maior que
            console.log (n1 < n2) // < menor que
             console.log (n1 >= n2)// >= maior ou igual que
            console.log (n1 <= n2) // <= menor ou igual que
            console.log (n1 ==  n2 ) // == igual
            console.log (n1 != n2 )// != nao igual - diferente


            //estruturas condicionais
            if ( n1 > n2 ){ //verificando a condição entre parenteses
            //se a condição for verdadeira "entre" nesse bloco
            console.log ("o n1 é maior que o n2")}
            else{
            //se a condição NÃO for verdadeira "entre" nesse bloco ELSE
            console.log( "O n1 não é maior que o n2")
            }

            //Exemplo de condição
            var minhaidade = 15
            if (minhaidade >= 16){
                console.log ("você pode votar")
            } else {
                console.log ("Você não pode votar")
            }

            /* 
    Comentários em 
    multiplas linhas 
*/
//Comentário em uma única linha

//O alert é utilizado para exibir uma mensagem em popup
//alert("Olá mundo!!!") 

//No Console conseguimos visualizar infomações 
//sem exibir na página
console.log("Olá mundo!!! Utilizando Console!")

//Criando uma função chamada quando clicamos no botão
function BotaoTeste() {
    alert("Você clicou no botão")
}

//Função do Botão para obter o nome
function BotaoNome() {
    //No prompt abre opção para digitar algo
    var nome2 = prompt('Qual é o seu nome?')
    //no confirm abre texto com opção ok e cancel
    confirm(`Olá ${nome2}, entendeu JS?`)
}

//Tipo de exibição de mensagens no console
console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//Declarando variáveis
//String - Conjunto de caracteres - Declarar com "" ou ''
var nome = "Douglas"
var sobrenome = "Camata"
//Number - Todo número em JS é do tipo Number - Declarar sem ""
var idade = 35
//Boolean - Somente recebe true ou false
var aprovado = true

console.log(typeof nome) //Comando typeof para saber o tipo do dado

console.log(nome + ' ' + sobrenome) //Concatenando strings com o +

//Se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2) //Irá somar as 2 variaveis number (35)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4) //Irá concatenar "juntar" as 2 variáveis ("1025")

n1 = n2 //Uma variável pode receber o valor de outra variável
console.log("n1 = " + n1 + ' e o n2 = ' + n2)

var salario = 1290.85 //Para atibuir um valor decimal utilizar . não ,
salario = salario + 200 //Posso também somar a variável com ela mesmo
console.log(salario)
salario += 200 //Representação mais simplificada da expressão acima 
console.log(salario)

//Antigamente para juntar texto e variáveis faziamos assim
console.log('Olá, ' + nome + ' você tem ' + idade + 'anos e recebe R$ ' + salario)
//Hoje utilizamos o TemplateString forma mais simples
console.log(`Olá, ${nome} você tem ${idade} anos e recebe R$ ${salario}`)


function BotaoSomar() {
    //Receber valor1 de um prompt
    var valor1 = prompt("Informe o valor 1: ")
    console.log(typeof valor1) //Verificando que a var é String
    //Receber valor2 de um prompt
    var valor2 = prompt("Informe o valor 2:")
    //Variável soma Receber valor1 + valor2
    //Convertendo a variavel valor1 e 2 de string para number
    //Posso utilizar parseInt() parseFloat() ou Number()
    var soma = Number(valor1) + Number(valor2)
    //Exibir em um alert o valor de soma
    //alert(`A soma dos números é: ${soma}`) //"1010"

    /*Alterando um elemento buscando ele pelo ID e alterando
    o conteúdo do HTML, Podemos ler da seguinte forma 
    No documento pegar o elemento pelo ID resultadoSoma e
    Alterar o conteúdo do HTML pela string*/
    document.getElementById("resultadoSoma").innerHTML +=
        `<br> A soma dos números ${valor1} e ${valor2} é = ${soma}`
}

function botaoCidade() {
    //Variavel nomeCidade recebendo o conteúdo digitado no input
    var nomeCidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML = nomeCidade
}

//Operadores Aritméticos e Ordem de precedência
var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) // 7
var opSubtracao = 5 - 2 //Operador de subtração -
console.log(opSubtracao) // 3 
var opMultiplicacao = 5 * 2 //Operador de multiplicação *
console.log(opMultiplicacao) // 10
var opDivisao = 5 / 2 //Operador de divisão /
console.log(opDivisao) // 2.5
var opExponenciacao = 5 ** 2 //Operador de exponenciação **
console.log(opExponenciacao) // 25
var opResto = 5 % 2 //Operador de resto da divisão %
console.log(opResto) // 1
//Ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) // 6.5
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) // 4
/*  1º ()
    2º **
    3º * / 
    4º %
    5º + - 
*/    
//Constantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
// pi = 3 - Se o valor for alterado dará erro no javascript

//Auto atribuição
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3    // quer dizer o mesmo que a expressão acima 

n++ // quando precisamos somar + 1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valor da variável

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log (n1 > n2) // > Maior que
console.log (n1 < n2) // < Menor que
console.log (n1 >= n2) // >= Maior ou igual que
console.log (n1 <= n2) // <= Menor ou igual que
console.log (n1 == n2) // == Igual
console.log (n1 != n2) // != Não igual - Diferente

//Estruturas condicionais
if (n1 > n2){        //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log ("O n1 é maior que o n2")
} else {
    // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
    console.log ("O n1 não é maior que o n2")
}
//Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16){
    console.log ("Você pode votar")
} else {
    console.log ("Você NÃO pode votar")
}

//operadores lógicos
// && representa o E
var login = "adm"
var senha = "123"
//para entrar na condição TRUE as 2 condições precisar ser verdadeira
if (login == "adm && senha == 123"){
    //execute esse bloco quando são true
} else {
    //execute esse bloco se pelo menos uma condição for false
}

var media = 6
//operador ou -> || (pipe)
//para entrar na condição TRUE pelo menos 1

//para sorteamos um valor aleatorio ultilizamos o math.random()
//o Math.random retorna um número decimal e precisamos multiplicar
//pelo nr maximo que desejamos e somar 1 quando necessario 
//o parseint utilizamos para obter apenas a parte inteira do numero
var nrSorteio = parseInt(math.radom() * 100) + 1
console.log (nrSorteado)

//switch case 
//É como se fosse vários if else de forma mais simples 
var diasemana = 3
switch(diasemana) {
    case 1:
        console.log("Hoje é:Domingo")
        break //para o switch case e não verificar as outras opções
    case 2 :
        console.log("Hoje é:segunda")
        break
    case 3 :
        console.log("Hoje é:terça")
        break
    case 4 :
        console.log("Hoje é:quarta")
        break
    case 5:
        console.log("Hoje é:quinta")
        break
    case 6:
        console.log("Hoje é:sexta")
        break 
    case 7:
        console.log("Hoje é:sabado")
        break
        default:
            console,log("dia invalido")
}

//laços de repetição while (que quer dizer enquanto)
//while (condição)
//enquanto a condição do parenteses for verdadeira
//continua repetindo o codigo do bloco
var nrVidas = 5
while (nrVidas > 0) {
    console.log (`Você ainda tem ${nrVidas} `)
    nrVidas--
}

var alunoEntendeu = false
while (alunoEntendeu == false){
    console.log ("prof. explica novamente")
    alunoEntendeu = true
}

//verificar se o número é par com white
var contador = 1 //iniciando o contador de vezes que ira executar
while (contador <=10) { // Enquanto a condição for verdadeira
        if (contador % 2 == 0) { //condição para contratar for par
            console.log (`${contador} é par`)
        } else {
            console.log (`${contador} é impar`)
        }
        contador++ //adicionamos +1 ao contador para não ficar em looping
}

var cont = 1
while (cont <=5) {
    console.log (cont)
    cont++
}

for (var cont = 1; cont <= 5; cont++){
    console.log(cont)
}

//for - laço de repetição
// 1ª Expressão var i=1
//(Aqui eu inicio o controle de vezes)
// 2ª Expressão i <= 10
// (Aqui verificamos a condição para se)
// manter no loop)
// 3° exprssão i++
// (Aqui acrescentamos na variavel +1 vez)
// Exibindo
for (let i =; i <=10; i++) {
    console.log(i)
}