// This is a JavaScript file

var valor1;
var valor2;
var op;

//Passando valores ao input
/*
$(document).on("click","#btn9",function(){
    var valor = $("#texto").val();
    valor += "9";
    $("#texto").val(valor);
});

$(document).on("click","#btn8",function(){
    var valor = $("#texto").val();
    valor += "8";
    $("#texto").val(valor);
});

$(document).on("click","#btn7",function(){
    var valor = $("#texto").val();
    valor += "7";
    $("#texto").val(valor);
});

$(document).on("click","#btn6",function(){
    var valor = $("#texto").val();
    valor += "6";
    $("#texto").val(valor);
});

$(document).on("click","#btn5",function(){
    var valor = $("#texto").val();
    valor += "5";
    $("#texto").val(valor);
});

$(document).on("click","#btn4",function(){
    var valor = $("#texto").val();
    valor += "4";
    $("#texto").val(valor);
});

$(document).on("click","#btn3",function(){
    var valor = $("#texto").val();
    valor += "3";
    $("#texto").val(valor);
});

$(document).on("click","#btn2",function(){
    var valor = $("#texto").val();
    valor += "2";
    $("#texto").val(valor);
});

$(document).on("click","#btn1",function(){
    var valor = $("#texto").val();
    valor += "1";
    $("#texto").val(valor);
});

$(document).on("click","#btn0",function(){
    var valor = $("#texto").val();
    valor += "0";
    $("#texto").val(valor);
});
*/
//passando valor para a input
$(document).on("click",".botao", function(){
  var valor = $("#texto").val();
  valor += $(this).val();
  $("#texto").val(valor);
});

//limpar input
$(document).on("click","#ce",function(){
    $("#texto").val("");
});

//botões de operações

//soma
$(document).on("click","#soma",function(){
    valor1 = $("#texto").val();
    op = "soma";
    $("#texto").val("");
});

//subtração
$(document).on("click","#sub",function(){
    valor1 = $("#texto").val();
    op = "sub";
    $("#texto").val("");
});

//divisão
$(document).on("click","#div",function(){
    valor1 = $("#texto").val();
    op = "div";
    $("#texto").val("");
});

//mult
$(document).on("click","#mult",function(){
    valor1 = $("#texto").val();
    op = "mult";
    $("#texto").val("");
});

//botão igual
$(document).on("click","#igual",function(){
    var result;
    valor2 = $("#texto").val();
    if(op == "soma"){
        result = parseFloat(valor1) + parseFloat(valor2);
        $("#texto").val(result);
    }
    if(op == "sub"){
        result = parseFloat(valor1) - parseFloat(valor2);
        $("#texto").val(result);
    }
    if(op == "div"){
        result = parseFloat(valor1) / parseFloat(valor2);
        $("#texto").val(result);
    }
    if(op == "mult"){
        result = parseFloat(valor1) * parseFloat(valor2);
        $("#texto").val(result);
    }
});