import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generation-preview',
  templateUrl: './generation-preview.component.html',
  styleUrls: ['./generation-preview.component.scss'],
})
export class GenerationPreviewComponent {
  @Input() resume: any = {};
  @Input() showUser: boolean = false;
  params: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Format generation params
    this.params = {
      username: this.resume.username,
      title: this.resume.title,
      wordCount: this.resume.wordCount,
      date: this.resume.date,
      irrationalDenominator: this.resume.irrationalDenominator,
      frames: this.resume.frames,
      shapeCount: this.resume.shapeCount,
      dotSize: this.resume.dotSize,
      light: this.resume.light,
      bgColor: this.resume.bgColor,
    };
  }

  seeResume() {
    this.router.navigate(['/generation', this.params]);
  }

  seeProfile() {
    this.router.navigate(['/profile', this.resume.user]);
  }
}
