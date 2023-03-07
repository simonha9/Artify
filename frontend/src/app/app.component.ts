import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser: any = { id: 0 };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    //check auth
    this.checkAuth();
  }

  checkAuth() {
    this.api.getAuth().subscribe({
      next: (res: any) => {
        this.currentUser = res;
        //todo remove
        console.log('Logged in as ', this.currentUser);
      },
      error: (err: any) => {
        window.location.href = `${environment.backendUrl}/login`;
      },
    });
  }
}
