var agora = new Date()
var diasem = agora.getDay()

switch(diasem){
    case 0:
        console.log('Domingo ')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-Ferira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] DIA INVALIDO')
        break
}