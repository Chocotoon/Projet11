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

// Gestion de la lightbox
const links = Array.from(document.querySelectorAll('.expand'));
const galerie = links.map(link => link.getAttribute('imgSrc'));
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

for (let i = 0; i < links.length; i++) {
    link = links[i];

    link.addEventListener('click', function (event) {
        event.preventDefault();
        lightbox.style.display = 'block';
        lightboxImg.src = this.getAttribute('imgSrc');
    });
};
const closeLightbox = document.querySelector('.lightbox__close');
closeLightbox.addEventListener('click', close)
function close() {
    lightbox.style.display = "none";
}

const arrowRight = document.querySelector(".lightbox__next");
arrowRight.addEventListener("click", slideRight);
const arrowLeft = document.querySelector(".lightbox__prev");
arrowLeft.addEventListener("click", slideLeft);

let currentIndex = 0;
const totalImages = links.length;

function slideRight() {
    currentIndex++;
    if (currentIndex === totalImages) {
      currentIndex = 0;
    }
    lightboxImg.src = galerie[currentIndex];
  }
  
  function slideLeft() {
    currentIndex--;
    if (currentIndex === -1) {
      currentIndex = totalImages - 1;
    }
    lightboxImg.src = galerie[currentIndex];
  }