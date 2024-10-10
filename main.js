var simbolo = document.getElementById("simbolo");
var nu2 = document.getElementById("num2");
var nu1 = document.getElementById("num1");
var resultado = 0;
var  color =1;

function number(n) {
    if (n == 10) {
        nu1.value +=".";
    } else {
        if (simbolo.innerHTML == "") {
            nu1.value +=parseFloat(n);
        } else {
            nu2.value += parseFloat(n);
        } 
    }
    
}

function operation(n) {
    switch (n) {
        case 1:
            simbolo.innerHTML = "+";
            break;
        case 2:
           simbolo.innerHTML = "-";
            break;
        case 3:
            simbolo.innerHTML = "/";
                    
            break;
        case 4:
            simbolo.innerHTML = "x";
            break;
        case 5:
            if (nu1.value == "") {
                  nu1.value = 3.14;
            } else {
                  nu2.value = 3.14;
            }
            break;
    
        default:
            break;
    }
}

function resultad() {
    var num1 = parseFloat(nu1.value);
    var num2 = parseFloat(nu2.value);
    switch (simbolo.innerHTML) {
        case "-":
            resultado = num1 - num2;
            break;

        case "/":
            resultado = num1 / num2;
            break;

        case "x":
            resultado = num1 * num2;
            break;

        case "+":
            resultado = num1 + num2;
            break;
    }
    
    simbolo.innerHTML = ""; 
    nu2.value ="" ;
    nu1.value = Math.round(resultado * 100) / 100;
}
function borrar(n) {
    switch (n) {
        case 1:
            nu1.value ="";
            nu2.value ="" ;
            simbolo.innerHTML = "";  
            break;
        case 2:
             let valor = nu2.value;
                if (nu1.value && simbolo.innerHTML == "") {
                    nu1.value = valor.substring(0, valor.length - 1);  
                } else {
                    if (nu2.value == "") {
                        simbolo.innerHTML = "";
                    }else{
                          nu2.value = valor.substring(0, valor.length - 1); 
                    }
                }
             
            break;
    
        default:
            break;
    }
    
}
var color =1;

function cambioColor() {
    let fondo = document.getElementById("body");
    let bordeCalcu = document.getElementById("bordeCalcu");
    let bordeOper = document.getElementById("bordeOper");

    if (color == 1 ) {
    fondo.style.cssText = "color: black; background-color: white;";
    bordeCalcu.style.cssText ="border-color: black; background-color: rgba(0, 195, 255, 0.459);";
    bordeOper.style.cssText ="border-color: black;  background: white;";
    nu2.style.cssText =" background-color: white; color: black;";
    nu1.style.cssText =" background-color: white; color: black;";
    simbolo.style.cssText ="color: black;";
    color =0; 
    } else {
    fondo.style.cssText = "color: white; background-color: black;"; 
    bordeOper.style.cssText ="border-color: rgba(255, 255, 255, 0.493);";
    bordeCalcu.style.cssText ="border-color: white; ";
    nu2.style.cssText =" background-color: black; color: white;";
    nu1.style.cssText =" background-color: black; color: white;";
    simbolo.style.cssText ="color: white;  background: black;";
    color =1;
    }

    
}
