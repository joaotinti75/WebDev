const options = {
    dragging: false, 
    touchZoom: false, 
    doubleClickZoom: false, 
    scrollWheelZoom: false,
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-21.4820764,-47.5561397], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L.marker([-21.4820764,-47.5561397], {icon}).addTo(map)

function selectImage(event) {
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach(removeActiveClass);
    
    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    button.classList.add('active');

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');
    //atualizar o container de imagem (a imagem grande)
    imageContainer.src = image.src;

    //adicionar a classe .active para este botao que foi clicado
}
