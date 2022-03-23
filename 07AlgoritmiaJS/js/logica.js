//problema 1

function problema1(){
    //entrada
    var palabra=document.querySelector('#p1-input').value;
    //desmenuzar palabras
    var palabraA=palabra.split(' ');
    //palabras al reves
    var palabraB=palabraA.reverse();
    //fucionar
    var palabraC=palabraB.join();

    document.querySelector('#p1-output').textContent=palabraC;
}

//problema 2

var xp1=document.getElementById("p2-p1").value;
    var xp2=document.getElementById("p2-x2").textContent=0;
    var xp3=document.getElementById("p2-x3").textContent=0;
    var xp4=document.getElementById("p2-x4").textContent=0;
    var xp5=document.getElementById("p2-x5").textContent=0;

    var yp1=document.getElementById("p2-y1").textContent=0;
    var yp2=document.getElementById("p2-y2").textContent=0;
    var yp3=document.getElementById("p2-y3").textContent=0;
    var yp4=document.getElementById("p2-y4").textContent=0;
    var yp5=document.getElementById("p2-y5").textContent=0;

function problema2(){
    //restringir
    var validar=/^[0-9.]+$/;

    //entrada
    //para x
    var x1=parseFloat(document.getElementById("p2-x1").value);
    var x2=parseFloat(document.getElementById("p2-x2").value);
    var x3=parseFloat(document.getElementById("p2-x3").value);
    var x4=parseFloat(document.getElementById("p2-x4").value);
    var x5=parseFloat(document.getElementById("p2-x5").value);
    //para y
    var y1=parseFloat(document.getElementById("p2-y1").value);
    var y2=parseFloat(document.getElementById("p2-y2").value);
    var y3=parseFloat(document.getElementById("p2-y3").value);
    var y4=parseFloat(document.getElementById("p2-y4").value);
    var y5=parseFloat(document.getElementById("p2-y5").value);



    var xp1=document.getElementById("p2-x1").value;
    var xp2=document.getElementById("p2-x2").value;
    var xp3=document.getElementById("p2-x3").value;
    var xp4=document.getElementById("p2-x4").value;
    var xp5=document.getElementById("p2-x5").value;

    var yp1=document.getElementById("p2-y1").value;
    var yp2=document.getElementById("p2-y2").value;
    var yp3=document.getElementById("p2-y3").value;
    var yp4=document.getElementById("p2-y4").value;
    var yp5=document.getElementById("p2-y5").value;
    
    //validar los pares
    if(xp1.match(validar) && xp2.match(validar) && xp3.match(validar) && xp4.match(validar) && xp5.match(validar) 
    && yp1.match(validar) && yp2.match(validar) && yp3.match(validar) && yp4.match(validar) && yp5.match(validar)){
        //operacion
        var proEsc=(x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5);
        document.getElementById("p2-output").textContent=proEsc;
    }
    
}





//problema 3

function problema3(){
    //definir un alfabeto 
    var alfabeto = ['A','B','C','D','E','F',
                    'G','H','I','J','K','L',
                    'M','N','Ñ','O','P','Q',
                    'R','S','T','U','V','W',
                    'X','Y','Z'];

    //obtener la cadena del input y separar por comas
    //como detectar la coma
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra 
    p3_palabras = p3_palabras.map(function (palabra){
        //como detectar un espacio
        return palabra.replace(/\s/g, '').toUpperCase();    //toUpperCase = convierte en mayusculas 
    });

    //calcular los caracteres unicos de cada palabra
    var p3_res = '';

    //iterar cada palabra
    p3_palabras.forEach(function (palabra){
        //separar las palabras en un array para leer cada letra 
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra){
            //iterar por palabra 
            palabra_array.forEach(function (letra_palabra){
                //para comprobarque la letra está dentro del alfabeto 
                if(letra_palabra== letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas 
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + '=' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;
}