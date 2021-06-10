import { Component, OnInit } from '@angular/core';
import { gallery } from '../interfaces';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artgallery: Array<gallery> = [];

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(): void {
    this.artgallery = this.functionsService.getGallery();
  }

}
