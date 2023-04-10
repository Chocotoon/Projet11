<?php if (is_singular()) : ?>
  <div class="lightbox">
    <button class="lightbox__close"><i class="fa-solid fa-xmark fa-xl"></i></button>
    <div class="lightbox__container">
      <img src="">
    </div>
  </div>
<?php else : ?>

  <div class="lightbox">
    <button class="lightbox__close"><i class="fa-solid fa-xmark fa-xl"></i></button>
    <button class="lightbox__next"><i class="fa-solid fa-chevron-right fa-xl"></i></button>
    <button class="lightbox__prev"><i class="fa-solid fa-chevron-left fa-xl"></i></button>
    <div class="lightbox__container">
      <img src="">
    </div>
  </div>
<?php endif; ?>