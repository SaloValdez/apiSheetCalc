$(document).ready(function() {


    $(".DpFotos").prop('disabled', true);
    




});



function mostrarIndicaciones(){
    
}




$(".tipoTrabajo").change(function() {
    var valorSelect =  $(this).val();
            // alert(valorSelect);
            console.log(valorSelect);
                if(valorSelect == "insta"){
                    $(".DpFotos").prop('disabled', false);
                        
                            var tipoAtencion = {
                                        "sel":"Seleccione...",
                                        "dp01":"DP01",
                                        "dp03": "DP 03",
                                        "dp15":"DP 15",
                                        "dp16":"DP 16",
                                        "dp17":"DP 17",
                                        "dp27":"DP 27",
                                        "dp40":"DP 40",
                                        "dp41":"DP 41",
                                        "1play":"(1play) Internet",
                                        "2playtel":"(2play) Internet + Telef.",
                                        "2playIptv":"(2play) Internet + Iptv",
                                        "3play":"(3play) Internet + Iptv + Telef.",
                                    };
                            
                }else  if(valorSelect == "post"){
                    var tipoAtencion = {"sel":"Seleccione...","traExt":"Traslado Externo"};
                    $(".DpFotos").prop('disabled', false);

                }else if (valorSelect == "manto"){
                    $(".DpFotos").prop('disabled', false);
                    var tipoAtencion = {"sel":"Seleccione...","pc02":"Cambio de Acometida",
                    };
                }else{
                    $(".DpFotos").prop('disabled', true);
                }
                $(".DpFotos").empty();
                $.each(tipoAtencion, function(index, value) {
                    console.log(index + ": " + value);
                    $(".DpFotos").append('<option value="'+index+'">'+value+'</option>');
                }); 
});


const $btnIndicaciones = document.querySelector("#btnIndicaciones");
$btnIndicaciones.addEventListener("click", () => {
   $('.desarrollo-indicaciones').show();
   $('#btnIndicaciones').hide();
      
});

const $btnIndicacionesCerrar = document.querySelector("#btnIndicacionesCerrar");
$btnIndicacionesCerrar.addEventListener("click", () => {
    $('.desarrollo-indicaciones').hide();
   $('#btnIndicaciones').show();
      
});







const $boton = document.querySelector("#btnGenerarReporte ");
$boton.addEventListener("click", () => {
    var txtSot = $('#sotReporte').val();

 
    // var  numeros = '77765439';
    let arraySOT = txtSot.split('');

    // console.log(arraySOT);

    valorDP = $('#DpFotos').val();


    // console.log(valorDP);

    if(txtSot.length == ''){
        alert('Ingresar Sot');
    
    }else if(valorDP =='dp01'){
        generar_dp01(arraySOT);
    } else if(valorDP =='dp03'){
        generar_dp03(arraySOT);
    }  else  if(valorDP =='dp16'){
        generar_dp16(arraySOT);
    }else if(valorDP =='dp27'){
        generar_dp27(arraySOT);
    }else if(valorDP =='dp15'){
        generar_dp15(arraySOT);
    }else if(valorDP =='dp17'){
        generar_dp17(arraySOT);
    }else if(valorDP =='dp40'){
        generar_dp40(arraySOT);
    }else if(valorDP =='dp41'){
        generar_dp41(arraySOT);
    }else if(valorDP =='1play'){
        generar_dp03(arraySOT);
        generar_dp01(arraySOT);
        generar_dp16(arraySOT);
        generar_dp15(arraySOT);
        generar_dp17(arraySOT);
    }else if(valorDP == '2playtel'){
        generar_dp03(arraySOT);
        generar_dp01(arraySOT);
        generar_dp16(arraySOT);
        generar_dp15(arraySOT);
        generar_dp17(arraySOT);
        generar_dp27(arraySOT);
    }else if(valorDP == '2playIptv'){
        generar_dp03(arraySOT);
        generar_dp01(arraySOT);
        generar_dp16(arraySOT);
        generar_dp15(arraySOT);
        generar_dp17(arraySOT);
        generar_dp40(arraySOT);
        generar_dp41(arraySOT);
    }else if(valorDP == '3play'){
        generar_dp01(arraySOT);
        generar_dp03(arraySOT);
        generar_dp16(arraySOT);
        generar_dp15(arraySOT);
        generar_dp17(arraySOT);
        generar_dp40(arraySOT);
        generar_dp41(arraySOT);
        generar_dp27(arraySOT);
    }


$('#txtSotGenerando').val(txtSot);

   $('#sotReporte').val('');
 


      
});















function generar_dp16(arraySot){
    $objetivo2 = document.querySelector("#contenedor_dp16");
    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
  
   $("#sot-numero1-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[0]+".png");
   $("#sot-numero2-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[1]+".png");
   $("#sot-numero3-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[2]+".png");
   $("#sot-numero4-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[3]+".png");
   $("#sot-numero5-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[4]+".png");
   $("#sot-numero6-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[5]+".png");
   $("#sot-numero7-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[6]+".png");
   $("#sot-numero8-dp16_serie").attr("src","./img/reportes/numerosDp16/"+ arraySot[7]+".png");
   
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();

        var hora = d.getHours();
        var minutos = d.getMinutes();

        hora = hora.toString();
        minutos = minutos.toString();

        if(hora.length == 1){
                hora  = '0'+ hora;
        }
        if(minutos.length == 1){
            minutos  = '0'+ minutos;
        }
        horaCompleta = hora +':'+ minutos;

        cadenaHora = horaCompleta.toString();

        hora1= cadenaHora.substr(0,1); // 2
        hora2= cadenaHora.substr(1,1); // 0
        hora3= cadenaHora.substr(-2,1); // 2
        hora4= cadenaHora.substr(-1,3); // 4
         // hora CMD PING
        $("#hora_cmd_numero1").attr("src","./img/reportes/numerosDp16/"+ hora1+".png");
        $("#hora_cmd_numero2").attr("src","./img/reportes/numerosDp16/"+ hora2+".png");
        $("#hora_cmd_numero4").attr("src","./img/reportes/numerosDp16/"+ hora3+".png");
        $("#hora_cmd_numero5").attr("src","./img/reportes/numerosDp16/"+ hora4+".png");
        // hora barrar de inicio
        $("#numero1-hora_inicio").attr("src","./img/reportes/numerosDp16/hora/h"+hora1+".png");
        $("#numero2-hora_inicio").attr("src","./img/reportes/numerosDp16/hora/h"+hora2+".png");
        $("#numero4-hora_inicio").attr("src","./img/reportes/numerosDp16/hora/h"+hora3+".png");
        $("#numero5-hora_inicio").attr("src","./img/reportes/numerosDp16/hora/h"+hora4+".png");


        
            var anio = d.getFullYear();
            var mes = (month<10 ? '0' : '') + month;
            var dia = (day<10 ? '0' : '') + day;
   
            cadenaAnio = anio.toString();
            cadenaMes = mes.toString();
            cadenaDia = dia.toString();
            // console.log(cadena);
            anio1= cadenaAnio.substr(0,1); // 2
            anio2= cadenaAnio.substr(1,1); // 0
            anio3= cadenaAnio.substr(-2,1); // 2
            anio4= cadenaAnio.substr(3,3); // 4
            
            mes1= cadenaMes.substr(0,1); // 2
            mes2= cadenaMes.substr(1,1); // 0


            dia1= cadenaDia.substr(0,1); // 2
            dia2= cadenaDia.substr(1,1); // 0
            // fecha cmd  PING
            $("#numero1_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ dia1+".png");
            $("#numero2_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ dia2+".png");
            $("#numero3_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ mes1+".png");
            $("#numero4_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ mes2+".png");
            $("#numero5_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ anio1+".png");
            $("#numero6_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ anio2+".png");
            $("#numero7_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ anio3+".png");
            $("#numero8_cmd_fecha").attr("src","./img/reportes/numerosDp16/"+ anio4+".png");
    
            // fecha barra de tareas PING
            $("#numero1-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+dia1+".png");
            $("#numero2-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+dia2+".png");
            $("#numero3-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+mes1+".png");
            $("#numero4-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+mes2+".png");
            $("#numero5-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+anio1+".png");
            $("#numero6-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+anio2+".png");
            $("#numero7-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+anio3+".png");
            $("#numero8-fecha-inicio").attr("src","./img/reportes/numerosDp16/hora/h"+anio4+".png");


            html2canvas($objetivo2) // Llamar a html2canvas y pasarle el elemento
            .then(canvas => {
            // Cuando se resuelva la promesa traerá el canvas
            $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
            let enlace = document.createElement('a');

            sotNombre = arraySot.toString();
            enlace.download = "dp16_"+sotNombre.replace(/\,/g,'')+".png"

            // Convertir la imagen a Base64
            enlace.href = canvas.toDataURL();
            // Hacer click en él
            enlace.click();
    });
}




// DP15
function generar_dp15 (arraySot){
    console.log(arraySot);
                const $objetivo_serie = document.querySelector("#contenedor_dp15_serie"); // A qué le tomamos la foto
                const $objetivo_niveles = document.querySelector("#contenedor_dp15_niveles"); 
                const    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp15_serie").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp15_serie").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp15_serie").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp15_serie").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp15_serie").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp15_serie").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp15_serie").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp15_serie").attr("src","img/numeros/"+arraySot[7]+".png");

                $("#sot-numero1-dp15_niveles").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp15_niveles").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp15_niveles").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp15_niveles").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp15_niveles").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp15_niveles").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp15_niveles").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp15_niveles").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo_serie) // Llamar a html2canvas y pasarle el elemento
                .then(canvas =>{
                    // Cuando se resuelva la promesa traerá el canvas
                    $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
        
                    let enlace = document.createElement('a');
        
                    sotNombre = arraySot.toString();
                    enlace.download = "dp15_serie_"+sotNombre.replace(/\,/g,'')+".png"
                    ;
                    // Convertir la imagen a Base64
                    enlace.href = canvas.toDataURL();
                    // Hacer click en él
                    enlace.click();
                }); 

                html2canvas($objetivo_niveles) // Llamar a html2canvas y pasarle el elemento
                .then(canvas =>{
                    // Cuando se resuelva la promesa traerá el canvas
                    $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
        
                    let enlace = document.createElement('a');
        
                    sotNombre = arraySot.toString();
                    enlace.download = "dp15_niveles_"+sotNombre.replace(/\,/g,'')+".png"
                    ;
                    // Convertir la imagen a Base64
                    enlace.href = canvas.toDataURL();
                    // Hacer click en él
                    enlace.click();
                }); 
    }
    



// DP17
function generar_dp17(arraySot){
    console.log(arraySot);
                const $objetivo_24basico = document.querySelector("#contenedor_dp17_2_4_basico"); // A qué le tomamos la foto
                const $objetivo_24avanzado = document.querySelector("#contenedor_dp17_2_4_avanzado"); // A qué le tomamos la foto
                const $objetivo_5gbasico = document.querySelector("#contenedor_dp17_5g_basico"); // A qué le tomamos la foto
                const $objetivo_5gavanzado = document.querySelector("#contenedor_dp17_5g_avanzado"); // A qué le tomamos la foto

               
               
               
                // const $objetivo_niveles = document.querySelector("#contenedor_dp15_niveles"); 
                const    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                // 2.4 basico
                $("#sot-numero1-dp17_24_basico").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp17_24_basico").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp17_24_basico").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp17_24_basico").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp17_24_basico").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp17_24_basico").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp17_24_basico").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp17_24_basico").attr("src","img/numeros/"+arraySot[7]+".png");
                // 2.4 avanzado
                $("#sot-numero1-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp17_24_avanzado").attr("src","img/numeros/"+arraySot[7]+".png");
                 // 5G basico
                 $("#sot-numero1-dp17_5g_basico").attr("src","img/numeros/"+arraySot[0]+".png");
                 $("#sot-numero2-dp17_5g_basico").attr("src","img/numeros/"+arraySot[1]+".png");
                 $("#sot-numero3-dp17_5g_basico").attr("src","img/numeros/"+arraySot[2]+".png");
                 $("#sot-numero4-dp17_5g_basico").attr("src","img/numeros/"+arraySot[3]+".png");
                 $("#sot-numero5-dp17_5g_basico").attr("src","img/numeros/"+arraySot[4]+".png");
                 $("#sot-numero6-dp17_5g_basico").attr("src","img/numeros/"+arraySot[5]+".png");
                 $("#sot-numero7-dp17_5g_basico").attr("src","img/numeros/"+arraySot[6]+".png");
                 $("#sot-numero8-dp17_5g_basico").attr("src","img/numeros/"+arraySot[7]+".png");
                 // 5G avanzado
                 $("#sot-numero1-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[0]+".png");
                 $("#sot-numero2-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[1]+".png");
                 $("#sot-numero3-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[2]+".png");
                 $("#sot-numero4-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[3]+".png");
                 $("#sot-numero5-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[4]+".png");
                 $("#sot-numero6-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[5]+".png");
                 $("#sot-numero7-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[6]+".png");
                 $("#sot-numero8-dp17_5g_avanzado").attr("src","img/numeros/"+arraySot[7]+".png");
                 
                // 2.4 BASICO
                html2canvas($objetivo_24basico) // Llamar a html2canvas y pasarle el elemento
                .then(canvas =>{
                    // Cuando se resuelva la promesa traerá el canvas
                    $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
        
                    let enlace = document.createElement('a');
        
                    sotNombre = arraySot.toString();
                    enlace.download = "dp17_24basico_"+sotNombre.replace(/\,/g,'')+".png"
                    ;
                    // Convertir la imagen a Base64
                    enlace.href = canvas.toDataURL();
                    // Hacer click en él
                    enlace.click();
                }); 
                // 2.4 AVANZADO
                html2canvas($objetivo_24avanzado) // Llamar a html2canvas y pasarle el elemento
                .then(canvas =>{
                    // Cuando se resuelva la promesa traerá el canvas
                    $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
        
                    let enlace = document.createElement('a');
        
                    sotNombre = arraySot.toString();
                    enlace.download = "dp17_24avanzado_"+sotNombre.replace(/\,/g,'')+".png"
                    ;
                    // Convertir la imagen a Base64
                    enlace.href = canvas.toDataURL();
                    // Hacer click en él
                    enlace.click();
                }); 

                  // 5G BASICO
                  html2canvas($objetivo_5gbasico) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas =>{
                      // Cuando se resuelva la promesa traerá el canvas
                      $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
          
                      let enlace = document.createElement('a');
          
                      sotNombre = arraySot.toString();
                      enlace.download = "dp17_5gbasico_"+sotNombre.replace(/\,/g,'')+".png"
                      ;
                      // Convertir la imagen a Base64
                      enlace.href = canvas.toDataURL();
                      // Hacer click en él
                      enlace.click();
                  }); 
                  // 5G AVANZADO
                  html2canvas($objetivo_5gavanzado) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas =>{
                      // Cuando se resuelva la promesa traerá el canvas
                      $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
          
                      let enlace = document.createElement('a');
          
                      sotNombre = arraySot.toString();
                      enlace.download = "dp17_5gavanzado_"+sotNombre.replace(/\,/g,'')+".png"
                      ;
                      // Convertir la imagen a Base64
                      enlace.href = canvas.toDataURL();
                      // Hacer click en él
                      enlace.click();
                  }); 
    }
    



// DP 01 FOTO FACHADA
function generar_dp01 (arraySot){
    console.log(arraySot);
    
                const $objetivo = document.querySelector("#contenedor_dp01"), // A qué le tomamos la foto
                    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp01").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp01").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp01").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp01").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp01").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp01").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp01").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp01").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
                .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    
                let enlace = document.createElement('a');
    
                sotNombre = arraySot.toString();
                enlace.download = "dp01_"+sotNombre.replace(/\,/g,'')+".png"
                ;
                // Convertir la imagen a Base64
                enlace.href = canvas.toDataURL();
                // Hacer click en él
                enlace.click();
            });
    }
    

// DP 03  FOTO FAT
function generar_dp03 (arraySot){
    console.log(arraySot);
    
                const $objetivo = document.querySelector("#contenedor_dp03"), // A qué le tomamos la foto
                    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp03").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp03").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp03").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp03").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp03").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp03").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp03").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp03").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
                .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    
                let enlace = document.createElement('a');
    
                sotNombre = arraySot.toString();
                enlace.download = "dp03_"+sotNombre.replace(/\,/g,'')+".png"
                ;
                // Convertir la imagen a Base64
                enlace.href = canvas.toDataURL();
                // Hacer click en él
                enlace.click();
            });
    }


// DP 40  foto ip IPTV
function generar_dp40 (arraySot){
    console.log(arraySot);
    
                const $objetivo = document.querySelector("#contenedor_dp40"), // A qué le tomamos la foto
                    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp40").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp40").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp40").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp40").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp40").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp40").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp40").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp40").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
                .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    
                let enlace = document.createElement('a');
    
                sotNombre = arraySot.toString();
                enlace.download = "dp40_"+sotNombre.replace(/\,/g,'')+".png"
                ;
                // Convertir la imagen a Base64
                enlace.href = canvas.toDataURL();
                // Hacer click en él
                enlace.click();
            });
    }


// DP 41  foto RESOLUCION IPTV
function generar_dp41 (arraySot){
    console.log(arraySot);
    
                const $objetivo = document.querySelector("#contenedor_dp41"), // A qué le tomamos la foto
                    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp41").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp41").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp41").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp41").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp41").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp41").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp41").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp41").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
                .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    
                let enlace = document.createElement('a');
    
                sotNombre = arraySot.toString();
                enlace.download = "dp41_"+sotNombre.replace(/\,/g,'')+".png"
                ;
                // Convertir la imagen a Base64
                enlace.href = canvas.toDataURL();
                // Hacer click en él
                enlace.click();
            });
    }

// DP 27  foto telefono
function generar_dp27 (arraySot){
    console.log(arraySot);
    
                const $objetivo = document.querySelector("#contenedor_dp27"), // A qué le tomamos la foto
                    $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas
                
                $("#sot-numero1-dp27").attr("src","img/numeros/"+arraySot[0]+".png");
                $("#sot-numero2-dp27").attr("src","img/numeros/"+arraySot[1]+".png");
                $("#sot-numero3-dp27").attr("src","img/numeros/"+arraySot[2]+".png");
                $("#sot-numero4-dp27").attr("src","img/numeros/"+arraySot[3]+".png");
                $("#sot-numero5-dp27").attr("src","img/numeros/"+arraySot[4]+".png");
                $("#sot-numero6-dp27").attr("src","img/numeros/"+arraySot[5]+".png");
                $("#sot-numero7-dp27").attr("src","img/numeros/"+arraySot[6]+".png");
                $("#sot-numero8-dp27").attr("src","img/numeros/"+arraySot[7]+".png");
                
    
                html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
                .then(canvas => {
                // Cuando se resuelva la promesa traerá el canvas
                $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    
                let enlace = document.createElement('a');
    
                sotNombre = arraySot.toString();
                enlace.download = "dp27_"+sotNombre.replace(/\,/g,'')+".png"
                ;
                // Convertir la imagen a Base64
                enlace.href = canvas.toDataURL();
                // Hacer click en él
                enlace.click();
            });
    }












// function  pruebaClick(){

  


//     let enlace = document.createElement('a');

//     // enlace.download = 'maricrus.png';
//     enlace.href = 'https://www.youtube.com/watch?v=Vvn1pchCCOA&list=RDVvn1pchCCOA&start_radio=1','_blank';
//     enlace.click('https://www.youtube.com/watch?v=Vvn1pchCCOA&list=RDVvn1pchCCOA&start_radio=1','_blank');


//     console.log(enlace.href);





// }































// // alert("holo");
// $("#btnCapturar").on("click", function(e){
//         // alert('holo');

//         var test = $(".contenedor").get(0);


//             html2canvas(test).then(function(canvas){

//                 // width
//                 var canvasWidth = canvas.Width;
//                 // height
//                 var canvasHeight = canvas.height;
//                 // dimencionar la captura



//                 // renderizar la imagen

//                 $('.canvas').html(canvas);

//                     var img =  Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);

//                     console.log(img)
//                 // renderizar imagen
                

//                 // $('.pic').html(img);
//             });



// });