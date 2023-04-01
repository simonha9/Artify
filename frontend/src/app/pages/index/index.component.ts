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

  ngOnInit(): void {
    //Get all resume generations from backend
    this.api.searchResumes('').subscribe({
      next: (res: any) => {
        this.generations = res;
        console.log('generations', this.generations);
      },
    });
  }
}
