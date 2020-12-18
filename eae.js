var fofura = prompt("Quanta fofura você tem?")
if (fofura < 1000){
    alert ("vc n é fofo grr");
}else{
    alert ("vc é bem fofinho yupiiii");
}

while (fofura< 1000){
    var fofura = prompt("Quanta fofura você tem?");
    alert ("vc n é fofo grr");
}

function botao(){
    document.getElementById("thanks").innerHTML = "obrigado por ser fofo :)";
}

function redirecionar() {
    window.open("https://br.pinterest.com/claudiaoliv0170/gatinhos-fofos/");
}

function trocar(){
    document.getElementById("thanks").innerHTML = "te amo clica";
}

function voltar(){
    document.getElementById("thanks").innerHTML = "obrigado por ser fofo :)";
}

