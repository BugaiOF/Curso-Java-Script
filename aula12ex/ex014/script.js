function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')  
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()   
    msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos.`
    if (hora >= 0 && hora <12 ){    
        //BOM DIA 
        img.innerHTML = `<img src="manha.png">` 
        document.body.style.background = '#debfaa'
    }else if (hora >= 12 && hora <18){
         //BOA TARDE    
        img.innerHTML = `<img src="tarde.png">`
        document.body.style.background = '#d75902'
    }else {
        //BOA NOITE
        img.innerHTML = `<img src="noite.png">`     
        document.body.style.background = '#c273133  '
    }
}
