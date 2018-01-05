// JavaScript Document
var secActual=1;

function cambiarSec(numSec){
	$("#pagina"+secActual).hide();
	$("#pagina"+numSec).show();
	secActual=numSec;
	$('html,body').animate({scrollTop:'0px'}, 0);
}


function getPersonaje() {
		gtag('event', 'Resultados');

		var p1 = document.querySelectorAll('[name^=pregunta1]');
		var p2 = document.querySelectorAll('[name^=pregunta2]');
		var p3 = document.querySelectorAll('[name^=pregunta3]');

		if ((p1[0].checked || p1[1].checked || p1[2].checked) && (p2[0].checked || p2[1].checked || p2[2].checked) && (p3[0].checked || p3[1].checked || p3[2].checked))  {
				cambiarSec(3);
				if(p1[0].checked){
					$("#jake").show();
				}else if(p1[1].checked){
					$("#princesa").show();
				}else{
					$("#finn").show();
				}

		} else {
			 $('#error').show();
			  $('#error .text1').html('Debes contestar todas las preguntas para descubrir tu personaje');
		}
	}

function validateForm(){
	var val = true;
  if ($('input[name=premio]:checked').size() == 0) {
			val = false;
  }
	if($("#nombre").val() == '') {
		 val = false;
	}
	if($("#apellidos").val() == '') {
		val = false;
	}
	if($("#email").val() == '') {
		 val = false;
	}
	if($("#direccion").val() == '') {
		 val = false;
	}
	if($("#ciudad").val() == '') {
		 val = false;
	}
	if($("#cp").val() == '') {
		 val = false;
	}
	if($("#telefono").val() == '') {
		 val = false;
	}
	if($("#mes").val() == '') {
		 val = false;
	}
	if($("#ano").val() == '') {
		 val = false;
	}
	if ($('#micheck:checked').length  === 0) {
		$('#error').show();
		 $('#error .text1').html('Debes aceptar los terminos y condiciones');
      val = false;
}
	if(val) {
	    $("#form2").submit();
		} else {
			$('#error').show();
			 $('#error .text1').html('Debes rellenar todos los campos para recibir tu premio');
		}
}

function GetCookie(name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;
    while (i<clen) {
        var j=i+alen;

        if (document.cookie.substring(i,j)==arg)
            return "1";
        i=document.cookie.indexOf(" ",i)+1;
        if (i==0)
             break;
     }
    return null;
}

function aceptar_cookies(){
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="cookies_horaaventuras=aceptada; expires="+expire;

    var visit=GetCookie("cookies_horaaventuras");
    if (visit==1){
        $('#cookies').toggle();
    }
}

function cierra() {
	    $('#error').hide();
			 $('#error .text1').html('');
}
