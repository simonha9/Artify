import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Profile } from 'src/app/classes/profile';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  currentUserDetails: Profile = { id: '', username: '', email: '' };
  resumes = [];
  loadStatusMessage: string = 'Loading user generations...';
  //Router param
  userId: string = '';

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    //Get userId from router param
    this.userId = this.route.snapshot.paramMap.get('id') || '';

    //Get user details from backend
    this.api.getUserDetails(this.userId).subscribe({
      next: (res: any) => {
        this.currentUserDetails = {
          id: res.uid,
          username: res.user.email.split('@')[0],
          email: res.user.email,
        };
      },
    });

    //Get user resume generations from backend
    this.api.getResumes(this.userId).subscribe({
      next: (res: any) => {
        if (res.resumes.length > 0) {
          this.loadStatusMessage = '';
          this.resumes = res.resumes;
        } else {
          this.loadStatusMessage = 'No generations found';
        }
      },
      error: (err: any) => {
        this.loadStatusMessage = 'Error loading generations';
      },
    });
  }
}
