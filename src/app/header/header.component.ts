import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectedTopic: EventEmitter<string> = new EventEmitter();
  topic: string;

  constructor() {}

  ngOnInit(): void {}

  selectRecipesView() {
    this.topic = 'recipes';
    this.selectedTopic.emit(this.topic);
  }

  selectShoppingListView() {
    this.topic = 'shopping-list';
    this.selectedTopic.emit(this.topic);
  }
}
