function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //bom dia
        bom.innerHTML = 'Bom dia!'
        img.src = '/Alguns-exerc-cios-em-Js/modelo/img/dia.png'
        document.body.style.background = '#348de0'
    }else if (hora >=12 && hora < 18){
        //Boa tarde
        bom.innerHTML = 'Bom tarde!'
        img.src = '/Alguns-exerc-cios-em-Js/modelo/img/tarde.png'
        document.body.style.background = '#cda1e1'

    }else{
        //boa noite
        bom.innerHTML = 'Bom noite!'
        img.src = '/Alguns-exerc-cios-em-Js/modelo/img/noite.png'
        document.body.style.background = '#003d56'

    }

}

