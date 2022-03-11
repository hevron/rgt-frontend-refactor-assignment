import { Injectable } from '@angular/core';
import {Galleries} from '../data/gallery';
import {Gallery} from '../models/gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getGalleries():Gallery[] {
    return Galleries;
  }
}
