import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
    constructor(private api: ApiService) { }
  
    ngOnInit(): void {
      this.checkAuth();
    }

    checkAuth() {
      this.api.getAuth().subscribe((res: any) => {
        //if user is not authenticated, redirect to 8080/login
        console.log(res)
        // if (res.ok === false) {
        //   //console.log('youre fucked')
        //  // window.location.href = 'http://localhost:8080/login';
        // }
        
      });
    }
}
