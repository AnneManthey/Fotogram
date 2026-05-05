
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

function renderGallery (){
    let galleryPicturesRef = document.getElementById("galleryPictures");
    for (let index = 0; index < myGallery.length; index++){
        galleryPicturesRef.innerHTML += getPicturesHtml(index);
    }
}

function getPicturesHtml(index){
    return `<button onclick="openDialog()" class="gallery_btn"><img class="gallery_img" src= "${myGallery[index]}" /></button>`;
}



function openDialog(){
    dialogRef.showModal();
}

function closeDialog(){
    dialogRef.close();
}