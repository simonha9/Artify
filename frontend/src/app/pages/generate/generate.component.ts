import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  constructor(private router: Router, private api: ApiService) {}

  onFileUpload(file: File) {
    /*
    this.api.uploadPDF(file).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
    */

    const genId = this.api.uploadPDF(file);

    this.router.navigate(['/generation', genId]);
  }
}
