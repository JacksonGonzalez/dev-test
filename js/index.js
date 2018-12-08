$(document).ready(function(){
    // PRUEBA CUANDO CARGUE
    // alert('Hola');

    // REVISAR QUE NO HAYAN CAMBIOS EN LAS OPCIONES
    function verificarConsola(){
        let q1 = $("#q1").val();
        let q2 = $("#q2").val();
        let q3 = $("#q3").val();
        let q4 = $("#q4").val();
        let q5 = $("#q5").val();
        let q6 = $("#q6").val();

        if(q1 == 'NO' && q2 == 'NO' && q3 == 'NO' && q4 == 'NO' && q5 == 'NO' && q6 == 'NO'){
            $("#consola").html('False');
        }else{
            $("#consola").html('True');
        }
        
    }

    $("#q1").change(function(){
        verificarConsola();
    });

    $("#q2").change(function(){
        verificarConsola();
    });

    $("#q3").change(function(){
        verificarConsola();
    });

    $("#q4").change(function(){
        verificarConsola();
    });

    $("#q5").change(function(){
        verificarConsola();
    });
    
    $("#q6").change(function(){
        verificarConsola();
    });

});