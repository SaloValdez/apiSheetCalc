$(document).ready(function(){
	$('#formModal input').on('change',function(){
		// alert($('input[name=radio]:checked','#formModal').val());

  var valorRadio = $('input[name=radio]:checked','#formModal').val();

  // console.log(valorRadio);
  if(valorRadio == 'insta'){
      tipoTrabajo = 0;
      $('.select-selected').text('INSTALACIÓN');
  }else if(valorRadio == 'manto') {
    tipoTrabajo = 1;
    $('.select-selected').text('MANTENIMINETO');
  }else if(valorRadio == 'post'){
     tipoTrabajo =2;
     $('.select-selected').text('POST VENTA');
  }

  console.log(tipoTrabajo);
    $('#trabajoo  option[value="'+ tipoTrabajo +'"]').attr('selected', 'selected');

   

	});	
});

$("#btnCerrarModal").on("click", function(){
  $(".modal").addClass("cerrar-modal");
})

// let txtSot = document.getElementById("sotInicio")
// let txtsotFinal= document.getElementById("sotFinal")





// txtSot.addEventListener('keydown', (f) => {
//   // var valorSot=""

//   txtsotFinal.value = document.getElementById("sotInicio").value;
 
 
// })





// INICIO modal
$("#cerrarModal").on("click", function(){
        const form =document.getElementById("formModal");
        let  transactionData = new FormData(form);
        fecha = transactionData.get("fecha-modal");
        sot = transactionData.get("sot-modal");
        nombres = transactionData.get("nombres-modal");
        direccion = transactionData.get("direccion-modal");
        dni = transactionData.get("dni-modal");
        codigo = transactionData.get("codigo-modal");
        plano = transactionData.get("plano-modal");
        cintillo = transactionData.get("cintillo-modal");
        fat = transactionData.get("fat-modal");
        borne = transactionData.get("borne-modal");
      tipoTrabajo = transactionData.get("radio")

        $("#sotInicio").val(sot);
        $("#dni-cliente").val(dni);
        $("#fecha-cliente").val(fecha);
        $("#nombre-cliente").val(nombres);
        $("#direccion-cliente").val(direccion);

        $("#codigo-cliente").val(codigo);
        $("#sotFinal").val(sot);
        $("#cintillo-cliente").val(cintillo);
        $("#plano-cliente").val(plano);
        $("#plano-cliente").val(plano);
        $("#fat-cliente").val(fat);
        $("#borne").val(borne);



          $(".modal").addClass("cerrar-modal");
      //     alert(" hola");
})




// FIN modal














var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


