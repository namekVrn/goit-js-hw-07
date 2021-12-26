import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery')
const renderHtml = ({original, preview,description })=>{
    return ` <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      title="${description}"
    />
  </a>`
}

const resultHtml = galleryItems.map((renderHtml)).join("")
const getRenderHtml = galleryBox.insertAdjacentHTML("beforeend",resultHtml)

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 2500,
    captionPosition: 'bottom',
    captionClass: "center"

});
