import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CategoryService } from '../services/category.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'primary';
  categories = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
}

// https://www.iloveimg.com/crop-image
