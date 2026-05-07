
const dialogRef = document.getElementById("photoDialog");

const myGallery = [
    "./assets/img/00_alaska.png",
    "./assets/img/01_anime.png",
    "./assets/img/02_atmosphere.png",
    "./assets/img/03_blue_tit.png",
    "./assets/img/04_hurricane.png",
    "./assets/img/05_lake.png",
    "./assets/img/06_moorente.png",
    "./assets/img/07_sea.png",
    "./assets/img/08_snow_bunting.png",
    "./assets/img/09_snow_leopard.png",
    "./assets/img/10_travel.png",
    "./assets/img/11_winter.png"
];

const myTitles = [
    "Alaska",
    "Anime City",
    "Thunderclouds",
    "Blue Tit",
    "Hurricane",
    "Lake",
    "Moor Duck",
    "Sea",
    "Snow Bunting",
    "Snow Leopard",
    "Mountains",
    "Winter Tree"
];

// Hauptseite Bildergalerie

function renderGallery() {
    let galleryPicturesRef = document.getElementById("galleryPictures");
    for (let index = 0; index < myGallery.length; index++) {
        galleryPicturesRef.innerHTML += getPicturesHtml(index);
    }
}

function getPicturesHtml(index) {
    return `<button onclick="openDialog(${index})" class="gallery_btn"><img class="gallery_img" src= "${myGallery[index]}" alt= "${myTitles[index]}" /></button>`;
}


// Dialog Popup

function openDialog(index) {
    dialogRef.showModal();
    dialogRef.classList.add("photo_dialog_opened");
    let dialogContent = document.getElementById("photoDialog");
    dialogContent.innerHTML = getDialogContent(index);
}

function getDialogContent(index){
    return `
    <header class="dialog_header">
          <h2 id="dialogName"class="dialog_nametag">${myTitles[index]}</h2>
          <button onclick="closeDialog(event)" class="button_close"><img src="./assets/icons/close_icon.png " /></button>
        </header>

        <section id="dialogPicture" class="dialog_picture">
          <img class="dialog_img" src= "${myGallery[index]}" />
        </section>

        <footer class="dialog_footer">
          <nav class="dialog_footer_nav">
            <button onclick="indexBack(${index})" id="buttonBack"><img src="./assets/icons/button_left.png" alt="arrow to the left"/></button>
            <p class="dialog_counter">${index+1} / ${myGallery.length}</p>
            <button onclick="indexForward(${index})" id="buttonForward"><img src="./assets/icons/button_right.png" alt="arrow to the right"/></button>
          </nav>
        </footer>
    `
}


function indexForward(index) {
    index++;
    let dialogContent = document.getElementById("photoDialog");
    if (index<myGallery.length){
        dialogContent.innerHTML = getDialogContent(index);
    }
    else {
        index=0;
        dialogContent.innerHTML = getDialogContent(index);
    }
}

function indexBack(index){
    index--;
    let dialogContent = document.getElementById("photoDialog");
    if (index>=0){
        dialogContent.innerHTML = getDialogContent(index);
    }
    else if(index<0){
        index=11;
        dialogContent.innerHTML = getDialogContent(index);
    }
}

function closeDialog() {
    event.stopPropagation();
    dialogRef.close();
    dialogRef.classList.remove("photo_dialog_opened");
}

window.onclick = function(event) {
    if (event.target == dialogRef) {
        closeDialog();
    }
};
