import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generation-preview',
  templateUrl: './generation-preview.component.html',
  styleUrls: ['./generation-preview.component.scss'],
})
export class GenerationPreviewComponent {
  @Input() resume: any = {};

  constructor(private router: Router) {}

  seeResume(resumeId: string) {
    this.router.navigate(['/generation', resumeId]);
  }
}
