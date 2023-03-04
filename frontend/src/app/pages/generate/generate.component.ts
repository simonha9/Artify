import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  constructor(private api: ApiService) {}

  onFileUpload(file: File) {
    console.log('onFileUploaded inside of generate.component.ts');
    console.log(file);
    this.api.uploadPDF(file);
  }
}
