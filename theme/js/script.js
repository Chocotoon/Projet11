// Gestion de la modale de contact
var modal = document.getElementById("modal");
var btns_modale = document.querySelectorAll(".btn_modale");


// Events Listenners pour faire apparaitre la modale
for (i = 0; i < btns_modale.length; i++) {
    element = btns_modale[i];
    element.onclick = function () {
        modal.style.display = "block";
        modal.classList.add("open_modale");
    }
}


// Ferme la modale au clic à l'extérieur de la modale 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Récupère la référence de la photo et l'intègre dans le champ de la modale correspondant
const ref_photo = document.querySelector('.ref_photo');
if (ref_photo != null) {

const ref = ref_photo.getAttribute('ref');
$(document).ready(function () {
    $("#modale_ref").val(ref);
});

}


// Gestion de la lightbox
const links = Array.from(document.querySelectorAll('.expand'));
let galerie = links.map(link => link.getAttribute('imgSrc'));
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeLightbox = document.querySelector('.lightbox__close');
closeLightbox.addEventListener('click', close)
function close() {
    lightbox.style.display = "none";
}

/* Navigation dans la lightbox
On récupère la position de l'image cliquée pour la navigation*/
const articleExpand = document.querySelectorAll('.expand');
articleExpand.forEach((expand, index) => {
    expand.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'block';
        lightboxImg.src = galerie[currentIndex];
    });
});

// On ajoute les événements aux flèches 

const arrowRight = document.querySelector(".lightbox__next");
if (arrowRight != null) {
arrowRight.addEventListener("click", slideRight);
}
const arrowLeft = document.querySelector(".lightbox__prev");
if (arrowLeft != null) {
arrowLeft.addEventListener("click", slideLeft);
}

function slideRight() {
    currentIndex++;
    if (currentIndex === galerie.length) {
        currentIndex = 0;
    }
    lightboxImg.src = galerie[currentIndex];

}

function slideLeft() {
    currentIndex--;
    if (currentIndex === -1) {
        currentIndex = galerie.length - 1;
    }
    lightboxImg.src = galerie[currentIndex];
}



// Charger plus de photos
let offset = 0;
let category = '';
let format = '';
let tri = '';
const buttonLoad = document.querySelector('#load_more');
if (buttonLoad != null) {

buttonLoad.addEventListener('click', loadArticles);

}

const inputCategory = document.querySelector('#category');
if (inputCategory != null) {

inputCategory.addEventListener('change', loadArticles);

}

const inputFormat = document.querySelector('#format');
if (inputFormat != null) {

inputFormat.addEventListener('change', loadArticles);

}

const inputTri = document.querySelector('#tri');
if (inputTri != null) {

inputTri.addEventListener('change', loadArticles);

}

function loadArticles() {

    if (inputCategory.value != category || inputFormat.value != format || inputTri.value != tri) {
        category = inputCategory.value;
        format = inputFormat.value;
        tri = inputTri.value;
        offset = 0;
        document.getElementById('#galerie').innerHTML = '';
        galerie = [];
    }
    else {
        offset += 12;
    }

    fetch('/wp-content/themes/theme/fetch_articles.php?offset=' + offset + '&category=' + category + '&format=' + format + '&tri=' + tri)
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                const galeriePhoto = document.getElementById('#galerie');
                const articleContainer = document.createElement('div');
                articleContainer.classList.add('galerie_photos');
                const articleImg = document.createElement('img');
                articleImg.src = data[i].thumbnail_url;
                const articleLien = document.createElement('a');
                articleLien.innerHTML = '<i class="fa-regular fa-eye fa-xl"></i>';
                articleLien.classList.add('eye');
                articleLien.href = data[i].url;
                const articleExpand = document.createElement('span');
                articleExpand.innerHTML = ' <i class="fa-solid fa-expand fa-xl"></i>';
                articleExpand.classList.add('expand');
                articleExpand.setAttribute('imgSrc', data[i].thumbnail_url);

                articleContainer.appendChild(articleImg);
                articleContainer.appendChild(articleLien);
                articleContainer.appendChild(articleExpand);
                galeriePhoto.appendChild(articleContainer);

                galerie.push(data[i].thumbnail_url);
            };
            const articleExpand = document.querySelectorAll('.expand');
            articleExpand.forEach((expand, index) => {
                expand.addEventListener('click', () => {
                    currentIndex = index;
                    lightbox.style.display = 'block';
                    lightboxImg.src = galerie[currentIndex];
                });
            });
        })
}

// Gestion du menu "burger"
const buttonMenu = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-menu-header-container')
const navBar = document.querySelector('.navigation')
buttonMenu.addEventListener('click', toggle);


function toggle() {

    const icone = this.querySelector('i');

    if (this.getAttribute('aria-expanded') === 'false') {

        this.setAttribute('aria-expanded', 'true');
        icone.classList.replace('fa-bars', 'fa-xmark')
        menuContainer.classList.add('fadeMenu');
        navBar.style.position = 'fixed';
    }
    
    else {

        this.setAttribute('aria-expanded', 'false');
        icone.classList.replace('fa-xmark', 'fa-bars')
        menuContainer.classList.remove('fadeMenu');
        navBar.style.position = 'relative';
    }
}