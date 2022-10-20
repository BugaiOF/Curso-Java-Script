function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os Dados Novamente!!!')
   }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //crianças 
                img.setAttribute('src','criançahomem.png')
            }else if(idade <21){
                 //jovem   
                 img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
            
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //crianças 
                img.setAttribute('src','criançamulher.png')
            }else if(idade <21){
                 //jovem   
                 img.setAttribute('src','moca.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultomulher.png')
            }else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.texAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos `
        res.appendChild(img)
   }
}