// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" loading="lazy"/>
    </a>`
    }).join("")

galleryContainer.innerHTML = createGalleryMarkup;

if ("loading" in HTMLImageElement.prototype){
    const lazyImages = document.querySelectorAll(".gallery__image")
    
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
const scriptLazyLib = document.createElement("script");
scriptLazyLib.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
scriptLazyLib.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
scriptLazyLib.crossOrigin = "anonymous";
scriptLazyLib.referrerPolicy = "no-referrer";
galleryContainer.insertAdjacentElement("afterend", scriptLazyLib)
}

let imageGallery = new SimpleLightbox('.gallery a', {
    captionsData : "alt",
    captionDelay : 250,
});

