import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() userId: number = 0;

  constructor(private router: Router) {}

  logout() {
    window.location.href = `${environment.backendUrl}/logout`;
  }

  seeMyProfile() {
    this.router.navigate(['/profile', this.userId]);
  }
}
