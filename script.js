const DIALOG_REF = document.getElementById("photoDialog");

const MY_GALLERY = [
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

const MY_TITLES = [
    "Mountain Ridge",
    "Waterfalls",
    "Thunderclouds",
    "Blue Tit",
    "Dunes",
    "Glacier",
    "Moor Duck",
    "Sunset",
    "Snow Bunting",
    "Snow Leopard",
    "Mountains",
    "Winter Tree"
];

// Creating main page gallery

function renderGallery() {
    let galleryPicturesRef = document.getElementById("galleryPictures");
    galleryPicturesRef.innerHTML = "";
    for (let index = 0; index < MY_GALLERY.length; index++) {
        galleryPicturesRef.innerHTML += getPicturesHtml(index);
    }
}

function getPicturesHtml(index) {
    return `<button onclick="openDialog(${index})" class="gallery_btn"><img class="gallery_img" src= "${MY_GALLERY[index]}" alt= "${MY_TITLES[index]}" /></button>`;
}


// Creating dialog content

function openDialog(index) {
    DIALOG_REF.showModal();
    DIALOG_REF.classList.add("photo_dialog_opened");
    let dialogContent = document.getElementById("photoDialog");
    dialogContent.innerHTML = getDialogContent(index);
}

function getDialogContent(index) {
    return `
    <header class="dialog_header">
          <h2 id="dialogName"class="dialog_nametag">${MY_TITLES[index]}</h2>
          <button onclick="closeDialog(event)" class="button_close"><img src="./assets/icons/close_icon.png " /></button>
        </header>

        <section id="dialogPicture" class="dialog_picture">
          <img class="dialog_img" src= "${MY_GALLERY[index]}" alt="${MY_TITLES[index]}" />
        </section>

        <footer class="dialog_footer">
          <nav class="dialog_footer_nav">
            <button onclick="indexBack(${index})" id="buttonBack"><img src="./assets/icons/button_left.png" alt="arrow to the left"/></button>
            <p class="dialog_counter">${index + 1} / ${MY_GALLERY.length}</p>
            <button onclick="indexForward(${index})" id="buttonForward"><img src="./assets/icons/button_right.png" alt="arrow to the right"/></button>
          </nav>
        </footer> `
}

// Dialog button function

function indexForward(index) {
    index++;
    let dialogContent = document.getElementById("photoDialog");
    if (index < MY_GALLERY.length) {
        dialogContent.innerHTML = getDialogContent(index);
    }
    else {
        index = 0;
        dialogContent.innerHTML = getDialogContent(index);
    }
}

function indexBack(index) {
    index--;
    let dialogContent = document.getElementById("photoDialog");
    if (index >= 0) {
        dialogContent.innerHTML = getDialogContent(index);
    }
    else if (index < 0) {
        index = MY_GALLERY.length - 1;
        dialogContent.innerHTML = getDialogContent(index);
    }
}

function closeDialog() {
    event.stopPropagation();
    DIALOG_REF.close();
    DIALOG_REF.classList.remove("photo_dialog_opened");
}

window.onclick = function (event) {
    if (event.target == DIALOG_REF) {
        closeDialog();
    }
};
