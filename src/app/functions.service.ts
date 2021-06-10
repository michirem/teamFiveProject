import { Injectable } from '@angular/core';
import { gallery } from './interfaces';
import { galleryItems } from './gallerydata';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  gallery: Array<gallery> = [];

  constructor() {
    this.gallery = galleryItems;
  }

getGallery(): Array<gallery> {
  return this.gallery;
  }
}
