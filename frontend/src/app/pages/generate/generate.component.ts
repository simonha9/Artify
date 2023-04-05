import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  uploadStatus: string = '';

  onP5Spiral(event: any) {
    const pdfFile = event.file;
    const title = event.title;
    const userId = this.auth.getUserId();

    this.api.uploadPDF(pdfFile, title, userId).subscribe({
      next: (res: any) => {
        this.uploadStatus =
          'Upload successful \n Please wait for the generation to complete \n See your profile for the generated art';
      },
      error: (err: any) => {
        this.uploadStatus =
          'Upload failed \n Please try again with a different resume pdf';
      },
    });
  }

  onSD(event: any) {
    //kai TODO
    const pdfFile = event.file;
    const title = event.title;
    const userId = this.auth.getUserId();

    this.api.uploadPDF(pdfFile, title, userId).subscribe({
      next: (res: any) => {
        this.router.navigate(['/sd-generation', res.id]);
      },
    });
  }
}
