var op_1;
var op_2;
var operacion;

var from_calc = document.getElementById("form_calc");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n0 = document.getElementById("n0");
var op_add = document.getElementById("op-add");
var op_sub = document.getElementById("op-sub");
var op_mult = document.getElementById("op-mult");
var op_div = document.getElementById("op-div");
var result = document.getElementById("result");
var point = document.getElementById("point");
var clear = document.getElementById("clear")

var pnt = function(e) {   
    from_calc.innerText = from_calc.innerText + ".";
};

var uno = function(e) {   
    from_calc.innerText = from_calc.innerText + "1";
};
var dos = function(e) {
    from_calc.innerText = from_calc.innerText + "2";
};
var tres = function(e) {
    from_calc.innerText = from_calc.innerText + "3";
};
var cuatro = function(e) {
    from_calc.innerText = from_calc.innerText + "4";
};
var cinco = function(e) {
    from_calc.innerText = from_calc.innerText + "5";
};
var seis = function(e) {
    from_calc.innerText = from_calc.innerText + "6";
};
var siete = function(e) {
    from_calc.innerText = from_calc.innerText + "7";
};
var ocho = function(e) {
    from_calc.innerText = from_calc.innerText + "8";
};
var nueve = function(e) {
    from_calc.innerText = from_calc.innerText + "9";
};
var cero = function(e) {
    from_calc.innerText = from_calc.innerText + "0";
};
point.addEventListener("click",pnt);
n1.addEventListener("click",uno);
n2.addEventListener("click",dos);
n3.addEventListener("click",tres);
n4.addEventListener("click",cuatro);
n5.addEventListener("click",cinco);
n6.addEventListener("click",seis);
n7.addEventListener("click",siete);
n8.addEventListener("click",ocho);
n9.addEventListener("click",nueve);
n0.addEventListener("click",cero);

var limpiar_op = function(){
    from_calc.innerText = "";

};

var clc = function(e){
    from_calc.innerText = "";
    op_1=0;
    op_2=0;
    operacion="";
};

clear.addEventListener("click", clc);

var add = function(e){
    operacion = "+";
    op_1 = from_calc.innerText;
    limpiar_op();
};

var sub = function(e){
    operacion = "-";
    op_1 = from_calc.innerText;
    limpiar_op();
};

var mult = function(e){
    operacion = "*";
    op_1 = from_calc.innerText;
    limpiar_op();
};

var div = function(e){
    operacion = "/";
    op_1 = from_calc.innerText;
    limpiar_op();
}

op_add.addEventListener("click",add);
op_sub.addEventListener("click",sub);
op_mult.addEventListener("click",mult);
op_div.addEventListener("click",div);

var igual = function(e){
    op_2= from_calc.innerText
    resolver(operacion);
};

result.addEventListener("click",igual);
var respuesta = 0;
function resolver(operacion) {
    
    if(operacion == "+"){
        
        respuesta= parseFloat(op_1) + parseFloat(op_2);
    }
    if(operacion == "-"){
        respuesta = parseFloat(op_1) - parseFloat(op_2);
    }
    if(operacion == "*"){
        respuesta = parseFloat(op_1) * parseFloat(op_2);
    }
    if(operacion == "/"){
        respuesta = parseFloat(op_1) / parseFloat(op_2);
    }
    clc();
    from_calc.innerText = respuesta;
}
    
