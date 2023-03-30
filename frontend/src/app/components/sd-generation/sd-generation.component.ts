import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sd-generation',
  templateUrl: './sd-generation.component.html',
  styleUrls: ['./sd-generation.component.scss']
})
export class SdGenerationComponent {
  generateForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.generateForm = this.fb.group({
      prompt: ['', Validators.required],
      cfg_scale: [],
      steps: [],
      samples: [],
    });
  }

  ngOnInit(): void {
  }

  generate() {
    console.log(this.generateForm.errors);
    this.api.generateSD(this.generateForm.value).subscribe({
      next: (res: any) => {
        //TODO: take base64 img res and display it
        console.log(res);
      }
    })
  }
}