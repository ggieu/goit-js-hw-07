import { galleryItems } from './gallery-items.js';
const listEl = document.querySelector('.gallery');
const typset = galleryItems.map(({ preview, original, description }) => {
    return `<li style="margin: 20px;" class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading="lazy"
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
}).join('');
listEl.insertAdjacentHTML("beforeend", typset);
const modalOpen = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        console.log('NEpraça');
        return;
    }
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src='${clickedImageSrc}' alt='${clickedImageAlt}'/>`, {
            onShow: (instance) => {
                document.addEventListener('keydown', modalClose);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', modalClose);
                instance = null;
            }
        });
    instance.show();
};
const modalClose = (event) => {
    if (event.key !== 'Escape') {
        return;
    }
    instance.close();
};
document.addEventListener('keydown', modalClose);
listEl.addEventListener('click', (event) => {
    modalOpen(event);
});