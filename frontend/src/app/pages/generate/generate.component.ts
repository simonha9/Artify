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
    private router: Router,
    private api: ApiService,
    private auth: AuthService
  ) {}

  onP5Spiral(event: any) {
    const pdfFile = event.file;
    const title = event.title;
    const userId = this.auth.getUserId();

    this.api.uploadPDF(pdfFile, title, userId).subscribe({
      next: (res: any) => {
        console.log(res);
        //this.router.navigate(['/generation', genId]);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onSD(event: any) {
    //kai TODO
    this.router.navigate(['/sd-generation']);
  }
}
