import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    //check auth
    this.checkAuth();
  }

  checkAuth() {
    this.api.getAuth().subscribe({
      next: (res: any) => {
        this.auth.setUserId(res.id);
        this.isLoggedIn = true;
      },
      error: (err: any) => {
        window.location.href = `${environment.backendUrl}/login`;
      },
    });
  }
}
