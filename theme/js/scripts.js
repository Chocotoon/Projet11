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



// Gestion de la lightbox
const links = Array.from(document.querySelectorAll('.expand'));
const galerie = links.map(link => link.getAttribute('imgSrc'));
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

/*for (let i = 0; i < links.length; i++) {
    link = links[i];

    link.addEventListener('click', function (event) {

        lightbox.style.display = 'block';
        lightboxImg.src = this.getAttribute('imgSrc');
    });
};*/
const closeLightbox = document.querySelector('.lightbox__close');
closeLightbox.addEventListener('click', close)
function close() {
    lightbox.style.display = "none";
}

/* Navigation dans la lightbox
On récupère la position de l'image cliquée pour la navigation*/
const articleContainer = document.querySelectorAll('.galerie_photos');
articleContainer.forEach((expand, index) => {
    expand.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'block';
        lightboxImg.src = galerie[currentIndex];
    });
});

// On ajoute les événements aux flèches 
const arrowRight = document.querySelector(".lightbox__next");
arrowRight.addEventListener("click", slideRight);
const arrowLeft = document.querySelector(".lightbox__prev");
arrowLeft.addEventListener("click", slideLeft);

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
buttonLoad.addEventListener('click', loadArticles);
const inputCategory = document.querySelector('#category');
inputCategory.addEventListener('change', loadArticles);
const inputFormat = document.querySelector('#format');
inputFormat.addEventListener('change', loadArticles);
const inputTri = document.querySelector('#tri');
inputTri.addEventListener('change', loadArticles);
function loadArticles() {
    galerie.splice(0, 12);
    if (inputCategory.value != category) {
        category = inputCategory.value;
        offset = 0;
        document.getElementById('#galerie').innerHTML = '';
    }
    else if (inputFormat.value != format) {
        format = inputFormat.value;
        offset = 0;
        document.getElementById('#galerie').innerHTML = '';
    }
    else if (inputTri.value != tri) {
        tri = inputTri.value;
        offset = 0;
        document.getElementById('#galerie').innerHTML = '';
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
              /*  if (offset = 0) {
                    galerie.splice(0, galerie.length);
                    galerie.push(data[i].thumbnail_url);
                }
                else if (offset != 0){
                    galerie.push(data[i].thumbnail_url);
                }*/
                galerie.push(data[i].thumbnail_url);
            };
            const articleContainer = document.querySelectorAll('.galerie_photos');
            articleContainer.forEach((expand, index) => {
                expand.addEventListener('click', () => {
                    currentIndex = index;
                    lightbox.style.display = 'block';
                    lightboxImg.src = galerie[currentIndex];
                });
            });
        })


    /*  const articleContainer = document.querySelectorAll('.galerie_photos');
      articleContainer.forEach((expand, index) => {
          expand.addEventListener('click', () => {
              currentIndex = index;
              lightbox.style.display = 'block';
              lightboxImg.src = galerie[currentIndex];
          });
      });*/


}

/*articleExpand.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = offset + i;
    lightbox.style.display = 'block';
    lightboxImg.src = this.getAttribute('imgSrc');
});*/


// Ajout des EventListenners aux boutons de filtres
/*const buttonFilters = document.querySelectorAll('.filtres button');

for (i = 0; i < buttonFilters.length; i++) {
    buttonFilters[i].addEventListener('click', toggle);
}

function toggle() {
    const icone = this.querySelector('i');
    if (this.getAttribute('aria-expanded') === 'false') {
        this.setAttribute('aria-expanded', 'true');
        icone.classList.replace('fa-caret-down', 'fa-caret-up')
    } else {
        this.setAttribute('aria-expanded', 'false');
        icone.classList.replace('fa-caret-up', 'fa-caret-down')
    }
}*/