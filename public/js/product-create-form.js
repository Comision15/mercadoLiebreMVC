console.log("product-create-form connected succcess!");

const formAddProduct = $("formAddProduct");
const elements = formAddProduct.elements;
let totalCharacters = 200;
let numberCharacters = 200;

const msgError = (element, msg, event) => {
  $(element).style.color = "red";
  $(element).innerHTML = msg;
  event.target.classList.add('is-invalid');
};

const cleanError = (element, {target}) => {
  target.classList.remove('is-invalid');
  target.classList.remove('is-valid');
  $(element).innerHTML = null;
};

const validField = (element, {target}) => {
  $(element).innerHTML = null;
  target.classList.remove('is-invalid')
  target.classList.add('is-valid');
}

$("name").addEventListener("focus", function (e) {
  cleanError("nameMsg", e)
});

$("name").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("nameMsg", "El nombre es requerido", e)
      break;
    case this.value.trim().length < 10:
      msgError("nameMsg", "El nombre de debe tener como mínimo 10 caracteres", e)
      break;
    default:
      validField("nameMsg", e)
      break;
  }
 
});

$("price").addEventListener("focus", function (e) {
  cleanError("priceMsg", e)
});

$("price").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("priceMsg", "El precio es requerido", e)
      break;
    case this.value < 0:
      msgError("priceMsg", "No puede ser un número negativo", e)
      break;
    default:
      validField("priceMsg", e)
      break;
  }
});

$("price").addEventListener("keyup", function (e) {
  let price = this.value;
  let discount = $("discount").value;

  $("finalPrice").value = +price - (+price * +discount / 100)
});

$("discount").addEventListener("keyup", function (e) {
    let price = $("price").value;
    let discount = this.value;
  
    $("finalPrice").value = +price - (+price * +discount / 100)
});


$('category').addEventListener('blur', function(e) {

  switch (true) {
    case !this.value:
      msgError("categoryMsg", "La categoría es requerida", e)
      break;
    default:
      validField("categoryMsg", e)
      break;
  }

})

$("description").addEventListener("focus", function (e) {
    
    $("descriptionInfo").hidden = false;
    $('numberCharacters').innerHTML = numberCharacters;


    cleanError("descriptionMsg", e)
});

$("description").addEventListener("blur", function (e) {
    $("descriptionInfo").hidden = true;

    switch (true) {
      case !this.value.trim():
        msgError("descriptionMsg", "La descripción es requerido", e)
        break;
      case this.value.trim().length < 20:
        msgError("descriptionMsg", "La descripción debe tener como mínimo 20 caracteres", e)
        break;
      case this.value.trim().length >= 200:
        msgError("descriptionMsg", "La descripción no debe superar los 200 caracteres", e)
        break;
      default:
        validField("descriptionMsg", e)
        break;
    }
});

$("description").addEventListener("keyup", function (e) {
   
    numberCharacters = totalCharacters -  +this.value.length

   $('numberCharacters').innerHTML =  numberCharacters;

   if(numberCharacters <= 0){
    $('descriptionInfo').hidden = true;
    msgError("descriptionMsg", "La descripción no debe superar los 200 caracteres", e)
   }else {
    $('descriptionInfo').hidden = false;
    cleanError("descriptionMsg", e)
   }
});

$('image1').addEventListener('change', (e) => {
    //console.log(e.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      $('image1Prev').src = reader.result
    }
});

$('image2').addEventListener('change', (e) => {
  //console.log(e.target.files[0]);

  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    $('image2Prev').src = reader.result
  }
});



