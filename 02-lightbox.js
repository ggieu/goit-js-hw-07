import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// // Change code below this line

const listEl = document.querySelector('.gallery')

const typset = galleryItems.map(({ preview, original, description }) => {
    return `
<li style="margin: 20px;" class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`}).join('');

listEl.insertAdjacentHTML("beforeend", typset)

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});