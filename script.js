
const dialogRef = document.getElementById("photoDialog")

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

const myTitles =[
    "Alaska",
    "City at Night",
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
    dialogRef.classList.add("opened");
    let galleryNamesRef = document.getElementById("dialogName");
    galleryNamesRef.innerHTML = getNamesDialog(index);

    let dialogPictureRef = document.getElementById("dialogPicture");
    dialogPictureRef.innerHTML = getPictureDialog(index);
}


function getPictureDialog(index) {
    return `<img class="dialog_img" src= "${myGallery[index]}" />`;
}

function getNamesDialog(index){
    return `<h2 class="dialog_nametag">${myTitles[index]}</h2>`;

}

function indexForward(index){
    console.log(index);
        index++;
   
}

function closeDialog() {   
    dialogRef.close();
    dialogRef.classList.remove("opened");
   
}

// Dialog Buttons vor/zurück

// function indexForward(index){
//     index++;
//     console.log(index);
// }

// function indexBack(){
// }