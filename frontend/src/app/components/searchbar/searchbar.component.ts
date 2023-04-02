import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Output() onSearch = new EventEmitter();
  searchForm = new FormGroup({
    keywords: new FormControl(''),
  });
  constructor() {}

  onSearchSubmit() {
    const keywords = this.searchForm.value.keywords;
    this.searchForm.reset();
    this.searchForm.value.keywords = ''; //reset changes the value to null, so we need to set it to empty string again
    this.onSearch.emit({ keywords: keywords });
  }
}
