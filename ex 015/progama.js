function verificando(){
    var data = new Date()
    var ano = data.getFullYear()
    var anodig = document.getElementById('txtano')
    if ( anodig.value == 1){
        window.alert(`Estamos no ano, ${ano}`);

    }else{
        window.alert('vish')
    }
}