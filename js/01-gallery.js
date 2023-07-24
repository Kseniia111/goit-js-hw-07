import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

const galleryMarkUp = document.querySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, description, original }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`)
    .join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl)

galleryMarkUp.addEventListener('click', onImgClick)

function openBigImag(target) {
  const instance = basicLightbox.create(`
    <img src="${target}" width="800" height="600">
`);
  instance.show();
  console.dir(instance);
  galleryList.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

