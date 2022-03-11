import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../services/gallery.service';
import {Gallery} from '../../models/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: Gallery[] = [];

  constructor(
    private galleryService: GalleryService,
  ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.images = this.galleryService.getGalleries();
  }

}
