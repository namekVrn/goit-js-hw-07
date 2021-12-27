import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxgallery = document.querySelector('.gallery') // Нашли ссылку на объект
const imgLink = document.querySelectorAll("a") // Cсылка на ссылку 
console.log(imgLink)
const getImg = ({original, preview, description}) => {
  return `<a href="${original}" class="gallery__link"><img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}"></a>`
}                                                     // Создали разметку
const resultHtml = galleryItems.map(getImg).join('')     // мапнули массив объектов с переданной сслкой на функцию
boxgallery.insertAdjacentHTML("beforeend", resultHtml)
console.log(boxgallery)

boxgallery.addEventListener('click', onGallety)
function onGallety(event){
event.preventDefault()
if(event.target.nodeName !== "IMG"){
return
}
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
console.log(event.target)
}
