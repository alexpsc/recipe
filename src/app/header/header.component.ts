import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {}

  onSave() {
    this.dataStorage.storeRecipes();
  }

  onFetch() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
