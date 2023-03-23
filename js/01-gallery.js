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
      data-source="${original}"
      alt="${description}"
    /></a></div>`;
    }).join('')
}

galleryBox.insertAdjacentHTML("beforeend", markupItems);
 
const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function onEscKeyPress(event) {
  if (event.code !== "Escape") return;
  instance.close();
}

function onImageClick(event) {
  event.preventDefault();
  const eventDataSetSource = event.target.dataset.source;
  if (!eventDataSetSource) return;
  instance.element().querySelector("img").src = eventDataSetSource;
  instance.show();
}

galleryBox.addEventListener("click", onImageClick);

console.log(galleryItems);
