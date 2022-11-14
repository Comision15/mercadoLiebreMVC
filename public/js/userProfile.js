console.log('userProfile success! (interna)');
const urlBase = 'https://apis.datos.gob.ar/georef/api';

const provinceSelect = document.getElementById('province-select');
const provinceInput = document.getElementById('province-input');
const citySelect = document.getElementById('city-select');
const cityInput = document.getElementById('city-input');

const getProvinces = async () => {
      try {

        const response = await fetch(`${urlBase}/provincias`);
        const {provincias} = await response.json();

        provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
        provinceSelect.innerHTML = `<option value="" hidden selected>Seleccione...</option>`

        provincias.forEach(({nombre}) => {
          provinceSelect.innerHTML += `<option ${nombre === provinceInput.value && 'selected'} value="${nombre}">${nombre}</option>`
        });
        
      } catch (error) {
        console.error
      }
  };

const getCities = async (province) => {
  try {
      citySelect.innerHTML = `<option>Cargando...</option>`;

      const response = await fetch(`${urlBase}/localidades?max=1000&provincia=${province}`,{
        cache : "force-cache"
      });
      const {localidades} = await response.json();

      localidades.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0);
      citySelect.innerHTML = `<option value="" hidden selected>Seleccione...</option>`;

      localidades.forEach(({nombre}) => {
        citySelect.innerHTML += `<option ${nombre === cityInput.value && 'selected'} value="${nombre}">${nombre}</option>`
        });
        
      
    } catch (error) {
       console.error
    }
}

window.addEventListener('load', () => {
  getProvinces();

  getCities(provinceInput.value)

  provinceSelect.addEventListener('change', async function(e){
  
    getCities(this.value)
 
  })

});
