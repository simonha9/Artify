import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stable-diffusion',
  templateUrl: './stable-diffusion.component.html',
  styleUrls: ['./stable-diffusion.component.scss']
})
export class StableDiffusionComponent {
  generateForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.generateForm = this.fb.group({
      prompt: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  generate() {
    this.api.generateSD(this.generateForm.value).subscribe({
      next: (res: any) => {
        //TODO: take base64 img res and display it
        console.log(res);
      }
    })
  }
  

}
