import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { P5spiral } from 'src/app/classes/p5spiral';

@Component({
  selector: 'app-generation-view',
  templateUrl: './generation-view.component.html',
  styleUrls: ['./generation-view.component.scss'],
})
export class GenerationViewComponent {
  generationId: string = '';
  generationTitle?: string = '';
  generationAuthor?: string = '';
  spiral?: P5spiral;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.generationAuthor = params.get('username') || '';
    this.generationTitle = params.get('title') || '';

    this.spiral = {
      dotSize: Number(params.get('dotSize')),
      irrationalDenominator: Number(params.get('irrationalDenominator')),
      shapeCount: Number(params.get('shapeCount')),
      frames: Number(params.get('frames')),
      light: Number(params.get('light')),
      bgColor: params.get('bgColor') || '',
    };
  }
}
