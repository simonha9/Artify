import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
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

  uploadPDFForm = new FormGroup({
    pdfTitle: new FormControl('', [Validators.required]),
    pdfFile: new FormControl(null, [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadPDFForm.patchValue({
        fileSource: file,
      });
    }
  }

  uploadPDF(event: any) {
    if (this.uploadPDFForm.invalid) {
      return;
    }

    // Get upload params
    const title = this.uploadPDFForm.value.pdfTitle;
    const file = this.uploadPDFForm.get('fileSource')?.value;

    // Reset form
    this.uploadPDFForm.reset();

    // Generate based on type chosen
    if (event.submitter.name === 'p5spiral') {
      this.onP5Spiral.emit({ file: file, title: title });
    } else if (event.submitter.name === 'sd') {
      //kai TODO
      this.onSD.emit({ file: file, title: title });
    }
  }
}
