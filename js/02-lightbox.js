import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');
const markupItems = galleryItemsCreate(galleryItems);

function galleryItemsCreate(items) {
    return items.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
     <a class="gallery__link" href="${original}"><img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    /></a></div>`;
    }).join('')
}

galleryBox.insertAdjacentHTML("beforeend", markupItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
 
console.log(galleryItems);
