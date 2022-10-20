function tabuada (){
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('seltab')
    if (num.value.legth == 0 ){
         window.alert('Digite um Número')
    }else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10 ){}
            let item =document.createElement('option')
            item.text = `${n} * ${c} = ${num*c}`
            tabu.appendChild(item)
            c++
    }
    
}