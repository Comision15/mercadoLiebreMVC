console.log("userProfile.js connected!");
const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
const apiUrlBase = "https://apis.datos.gob.ar/georef/api"

$('avatar').addEventListener('change', function ({ target }) {

    if(!allowedExtensions.exec(target.value)){
        $("msgErrorAvatar").innerText = "Solo archivos de imagen!"
        target.value = null;

    }else{
        let reader = new FileReader();

        reader.readAsDataURL(target.files[0]);
    
        reader.onload = () => {
            $('imagePreview').src = reader.result
        }
    }
    
});


const getProvinces = async () => {
    try {

        const response = await fetch(`${apiUrlBase}/provincias`);
        const result = await response.json();

        console.log(result.provincias)
        
    } catch (error) {
        console.error
    }

}



window.addEventListener('load', () => {

    getProvinces()

})