import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'descc',
      'https://www.maxpixel.net/static/photo/1x/Breakfast-Egg-Fresh-Avocado-Bread-Diet-Food-7935923.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
