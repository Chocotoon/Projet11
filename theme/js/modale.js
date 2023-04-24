// Récupère la référence de la photo et l'intègre dans le champ de la modale correspondant
const ref_photo = document.querySelector('.ref_photo');
const ref = ref_photo.getAttribute('ref');
$(document).ready(function () {
    $("#modale_ref").val(ref);
});
