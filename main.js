//  Ejercicios de desarrollo

// 01.- Crear un input donde el usuario escribirá un color en inglés y un botón. 
// El usuario al presionar el botón se debe cambiar el color de la página al color especificado.

$(function(){
    $('#ejercicio1').on('submit', function(e){
        e.preventDefault()
        var color = $('#color1').val()
        $('#bodi').css('background-color', color);
    })
})

// 02.- Crear dos input y un botón, el usuario debe ingresar su altura en uno de los inputs y el peso en el otro, 
// se debe mostrar un mensaje con IMC resultante, si es normal, mostrar en verde, si es alto o bajo mostrar en rojo.

 var calcularIMC = function(peso, estatura){
 	return peso / (estatura * estatura);
 }
 
 var interpretarIMC = function(peso, estatura){
 	var imc = calcularIMC(peso, estatura);
 	if (imc > 24){
         $('#p2').css('background-color', 'red');
         console.log("sobrepeso");
         return imc;

 	} else if (imc > 19 && imc < 24) {
         $('#p2').css('background-color', 'green');
 		console.log("ok, normal");
         return imc;
 	} else {
         $('#p2').css('background-color', 'red');
 		console.log("bajo peso");
         return imc;
 	}
 }
 
 $(function(){
    $('#e2').on('submit', function(e){
        e.preventDefault()
        var masa = $('#masa1').val()
        var altura = $('#altura1').val()
        var resultado2 = interpretarIMC(masa, altura);
        console.log(masa);
        console.log(altura);
        $('#p2').html('El IMC es de : '+ resultado2)
        console.log(resultado2);

    })
})

// 03.- Crear un input, un botón y otro input. El usuario debe ingresar un valor númerico en el primero, 
// y al presionar el botón en el segundo input debe aparecer de forma automática el valor más el IVA (incremento del 19%)

 $(function(){
    $('#e3').on('submit', function(e){
        e.preventDefault()
        var prod1 = $('#producto1').val()
        var prod2 = prod1 * 1.19
        $('#producto2').val(prod2)
        console.log(prod2);

    })
})

// 04.v1.- Crear tres inpus y un botón, los dos primeros inputs son para que el usuario ingrese su nombre y su apellido,
// al presionar el boton el texto del tercer input debe ser remplazado por la concatenación de los dos primeros.

 $(function(){
    $('#e41').on('submit', function(e){
        e.preventDefault()
        var texto =  $('#texto411').val() + $('#texto412').val()
        $('#texto413').val(texto)
        console.log(texto);
    })
})

// --> 04.v2.- Cambiar el código anterior para que el texto del tercer input se modifique automáticamente cada vez 
// que alguien escriba en los inputs sin necesidad de presionar algún botón.

$('#e42').ready(function(){
    $('#e42').keyup(function(){
        var texto423 =  $('#texto421').val() + $('#texto422').val()
        $('#texto423').val(texto423)
    });
});

// 05.- Crear dos inputs y un botón, el usuario debe ingresar un ancho en un input y un alto en el segundo, 
// al presionar el botón se debe dibujar un cuadrado (para dibujarlo se debe utilizar CSS)

 $(function(){
    $('#ej5').on('submit', function(e){
        e.preventDefault()
        var alt5 = $('#alto5').val()
        var anch5 = $('#ancho5').val()
        $('#e5').width(anch5).height(alt5)
        console.log('alto: ', alt5, ' ancho: ', anch5);
    })
})


// 06.- Crear una página que tiene 2 columnas, en la columna izquierda se muestran productos donde cada producto tiene nombre, 
// precio y un link agregar, cada vez que se presione alguno de los links se debe agregar el nombre del producto a la columna derecha.



// 07.- Crear una calculadora, para eso se debe generar un botón para cada número, un botón para suma, resta, multiplicación y división 
// y otro para generar el resultado, para realizar el ejercicio se recomienda ir guardando y concatenando cada texto en un input 
// y al hacer click en resultado utilizar la instrucción eval.