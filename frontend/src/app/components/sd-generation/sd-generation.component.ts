import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sd-generation',
  templateUrl: './sd-generation.component.html',
  styleUrls: ['./sd-generation.component.scss'],
})
export class SdGenerationComponent implements AfterViewInit {
  @Input() resumeId: string = '';
  @ViewChild('prompt') prompt!: ElementRef;
  @ViewChild('form') form!: ElementRef;
  @ViewChild('loading') loading!: ElementRef;
  parseAttempts = 0;

  generateForm: FormGroup;
  images: any[] = [];

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.generateForm = this.fb.group({
      prompt: ['', Validators.required],
      cfg_scale: [],
      steps: [],
      samples: [],
    });
  }
  ngAfterViewInit(): void {
    this.inputPrompt();
  }

  inputPrompt() {
    this.api.getGenerationTimeout(this.resumeId, 4000).subscribe({
      next: (res: any) => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const value = res[key];
            if (
              value != null &&
              value != undefined &&
              value != '' &&
              key == 'Work Experience 1'
            )
              this.prompt.nativeElement.innerHTML += key + ': ' + value + '\n';
          }
        }
        this.prompt.nativeElement.classList.remove('hidden');
        this.form.nativeElement.classList.remove('hidden');
        this.loading.nativeElement.classList.add('hidden');
      },
      error: (err: any) => {
        if (this.parseAttempts < 10) {
          this.inputPrompt();
        } else {
          this.loading.nativeElement.innerHTML =
            'Failed to parse resume. Please try again later.';
        }
        this.parseAttempts++;
      },
    });
  }

  ngOnInit(): void {}

  generate() {
    this.images = [];
    this.generateForm.value.prompt = this.prompt.nativeElement.innerHTML;
    this.api.generateSD(this.generateForm.value).subscribe({
      next: (res: any) => {
        res.artifacts.forEach((artifact: any) => {
          this.images.push('data:image/png;base64,' + artifact.image);
        });
      },
    });
  }
}
