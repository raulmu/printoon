import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../models/image';
import { ImagesService } from '../../services/images.service';
import { NavigateService } from '../../services/navigate.service';

@Component({
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  slug: string = 'Loading...';
  lastFetchSlug: string = '';

  constructor(
    private navigateService: NavigateService,
    private route: ActivatedRoute,
    private imagesService: ImagesService
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') ? this.route.snapshot.paramMap.get('slug')! : 'Failed';
    this.images = this.navigateService.data.getValue() ? this.navigateService.data.getValue() as Image[] : [];
    if (this.images) {
      this.lastFetchSlug = this.slug;
    }
    if (this.lastFetchSlug != this.slug) {
      this.imagesService.getImages(this.slug).subscribe((images) => {
        this.lastFetchSlug = this.slug;
        this.images = images;
      });
    }
  }
}

//https://linktr.ee/pkxdverse
