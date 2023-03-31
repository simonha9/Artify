import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sd-generation',
  templateUrl: './sd-generation.component.html',
  styleUrls: ['./sd-generation.component.scss']
})
export class SdGenerationComponent implements AfterViewInit {
  @Input() resumeId: string = '';
  @ViewChild('prompt') prompt!: ElementRef;

  generateForm: FormGroup;
  images: any[] = [];

  constructor(private api: ApiService, private fb: FormBuilder,) {
    this.generateForm = this.fb.group({
      prompt: ['', Validators.required],
      cfg_scale: [],
      steps: [],
      samples: [],
    });
  }
  ngAfterViewInit(): void {
    this.api.getGeneration(this.resumeId).subscribe({
      next: (res: any) => {

        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const value = res[key];
            if(
              value != null && 
              value != undefined &&
              value != "" &&
              key != "dotSize" &&
              key != "frames" &&
              key != "id" &&
              key != "irrationalDenominator" &&
              key != "shapeCount" &&
              key != "user" &&
              key != "username" &&
              key != "wordCount" &&
              key != "LinkedIn" &&
              key != "Phone" &&
              key != "Email" &&
              key != "Github" &&
              key != "Website"

              )
              this.prompt.nativeElement.innerHTML += key + ": " + value + "\n";
          }
        }


        console.log(res);
      }
    })
  }

  ngOnInit(): void {
  }

  generate() {
    this.images = [];
    this.generateForm.value.prompt = this.prompt.nativeElement.innerHTML;
    console.log(this.generateForm.value);
    this.api.generateSD(this.generateForm.value).subscribe({
      next: (res: any) => {
        //TODO: take base64 img res and display it

        res.artifacts.forEach((artifact: any) => {
          this.images.push("data:image/png;base64," + artifact.image);
        });

      }
    })
  }
}