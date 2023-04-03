import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) {}

  logout() {
    window.location.href = `${environment.backendUrl}/logout`;
  }

  seeMyProfile() {
    const userId = this.auth.getUserId();
    this.router.navigate(['/profile', userId]);
  }

  seeHome() {
    this.router.navigate(['/']);
  }

  seeCredits() {
    this.router.navigate(['/credits']);
  }
}
