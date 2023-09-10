import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");

const array = galleryItems.map((item, index) => {
  return `<li class="gallery__item" data-index="${index}"><a class="gallery__link" href="${item.original}"><img src="${item.preview}" alt="${item.description}" data-source="${item.original}"   class="gallery__image" /></a></li>`;
});

list.insertAdjacentHTML("beforeend", array.join(""));
var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay:250, });
list.addEventListener("click", listImg);

function listImg(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentItem = event.target.closest(".gallery__item");
}
