import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.scss']
})
export class UploadPDFComponent implements OnInit {

  @Output() onFileUpload = new EventEmitter();

  uploadPDFForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.uploadPDFForm = this.fb.group({
      pdf: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  uploadPDF(event: any) {
    console.log('uploadPDF inside of upload-pdf.component.ts')
    event.preventDefault();
    const file = (document.getElementById('pdf-file') as HTMLInputElement).files?.item(0);
    this.uploadPDFForm.reset();
    this.onFileUpload.emit(file)
  }
}
