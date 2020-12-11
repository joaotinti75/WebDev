// create map
const map = L.map('mapid').setView([-21.4820764,-47.5561397], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) //caso o marker exista, o remova

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// adicionar o campo de fotos

function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];
    if (input.value == '') {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = '';
        return 
    }

    //deletar o campo
    span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event){
    //retirar a classe active dos dois botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    //colocar a classe .active   
    const button = event.currentTarget
    console.log(button.classList);
    button.classList = 'active';
    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    console.log(button.dataset.value)
    input.value = button.dataset.value
    
}