import { Component, OnInit } from '@angular/core';
import { gallery } from '../interfaces';
import { FunctionsService } from '../functions.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  artgallery: Array<gallery> = [];

  constructor(private functionsService: FunctionsService) {
  }

  ngOnInit(): void {
    this.artgallery = this.functionsService.getGallery();
  }

}
