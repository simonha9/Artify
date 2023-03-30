import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.scss'],
})
export class UploadPDFComponent implements OnInit {
  @Output() onP5Spiral = new EventEmitter();
  @Output() onSD = new EventEmitter();

  uploadPDFForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.uploadPDFForm = this.fb.group({
      pdf: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  uploadPDF(event: any) {
    event.preventDefault();
    // Get upload params
    const title = (document.getElementById('pdfTitle') as HTMLInputElement)
      .value;
    const file = (
      document.getElementById('pdfFile') as HTMLInputElement
    ).files?.item(0);
    this.uploadPDFForm.reset();

    // Generate based on type chosen
    if (event.submitter.name === 'p5spiral') {
      this.onP5Spiral.emit({ file: file, title: title });
    } else if (event.submitter.name === 'sd') {
      //kai TODO
      this.onSD.emit({ file: file, title: title });
    } else {
      console.log('Error: unrecognized submitter name');
    }
  }
}
