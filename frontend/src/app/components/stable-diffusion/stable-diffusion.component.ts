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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      cfg_scale: [],
      steps: [],
      samples: [],
=======
>>>>>>> 9eb3bb0 (completed basic FE for SD)
=======
>>>>>>> ac52968 (completed basic FE for SD)
=======
      cfg_scale: [],
      steps: [],
      samples: [],
>>>>>>> 456bafa (added stable diffusion component)
    });
  }

  ngOnInit(): void {
  }

  generate() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(this.generateForm.errors);
=======
>>>>>>> 9eb3bb0 (completed basic FE for SD)
=======
>>>>>>> ac52968 (completed basic FE for SD)
=======
    console.log(this.generateForm.errors);
>>>>>>> 456bafa (added stable diffusion component)
    this.api.generateSD(this.generateForm.value).subscribe({
      next: (res: any) => {
        //TODO: take base64 img res and display it
        console.log(res);
      }
    })
  }
  

}
