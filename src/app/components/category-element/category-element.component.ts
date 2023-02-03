import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrls: ['./category-element.component.scss'],
})
export class CategoryElementComponent implements OnInit {
  @Input() item: any;
  constructor(
    private imagesService: ImagesService,
    private navigateService: NavigateService
  ) {}

  ngOnInit() {}

  selectCategory() {
    this.imagesService.getImages(this.item.slug).subscribe((images: any) => {
      this.navigateService.navigateTo(`images/${this.item.slug}`, images);
    });
  }
}

//https://www.30secondsofcode.org/css/s/image-mosaic
