import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage';
import { RecipeService } from '../recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverServices  {
  constructor(
    private dataStorage: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorage.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
