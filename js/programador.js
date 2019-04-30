var opc = 0;

//DEFINIR
document.getElementById("console-textbox-1").value = "1 + 1 =";
document.getElementById("console-textbox-2").value = "2";
document.getElementById("console-textbox-3").value = "CERTO";
document.getElementById("console-textbox-4").value = "ERRADO";
document.getElementById("card-textbox").value = "2";
document.getElementById("card-res").textContent = "CERTO";


function acao1(){
  //testar (testa se é verdadeiro ou falso)
  var res = document.getElementById('console-textbox-2').value;
  var resIf = document.getElementById('console-textbox-3').value;
  var resElse = document.getElementById('console-textbox-4').value;

  if (document.getElementById("card-textbox").value == res){
    document.getElementById("card-res").textContent = resIf;
  }
  else {
    document.getElementById("card-res").textContent = resElse;
  }
}


function acao2(){
  opc += 1;
  if (opc > 1){
    //Executar (ele lê oque vc fez nas partes escritas)
    var tela = document.getElementById('console-textbox-1').value;
    document.getElementById("card-tela").textContent = tela;

  }

  if (opc == 1){
    //iniciar (apaga tudo)
    document.getElementById("console-textbox-1").value = "";
    document.getElementById("console-textbox-2").value = "";
    document.getElementById("console-textbox-3").value = "";
    document.getElementById("console-textbox-4").value = "";
    document.getElementById("card-textbox").value = "";
    document.getElementById("card-tela").textContent = "TELA";
    document.getElementById("card-res").textContent = "RESULTADO";
    document.getElementById("btnAcao2").textContent = "EXECUTAR";
  }
}
