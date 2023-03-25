import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/classes/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() currentProfile: Profile = { id: '', username: '', email: '' };
  @Input() resumes: any = [];
  constructor() {}
  ngOnInit(): void {}
}
