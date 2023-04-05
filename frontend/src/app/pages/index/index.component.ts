import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private api: ApiService) {}

  generations: any = [];
  searchStatusMessage: string = 'Loading resume generations...';

  ngOnInit(): void {
    //Get all resume generations from backend
    this.api.searchResumes('').subscribe({
      next: (res: any) => {
        this.generations = res;
        this.searchStatusMessage = '';
      },
    });
  }

  onSearch(event: any) {
    //Searching... frontend message
    this.searchStatusMessage = 'Searching...';
    this.generations = [];

    //Perform search call
    const keywords = event.keywords;
    this.api.searchResumes(keywords).subscribe({
      next: (res: any) => {
        if (res.length === 0) {
          this.searchStatusMessage = 'No results found';
        } else {
          this.searchStatusMessage = '';
          this.generations = res;
        }
      },
    });
  }
}
