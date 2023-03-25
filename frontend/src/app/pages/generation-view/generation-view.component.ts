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
  spiral: P5spiral = {
    dotSize: 0,
    irrationalDenominator: 0,
    shapeCount: 0,
    frames: 0,
  };

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    //Get generation id from params
    this.generationId = this.route.snapshot.paramMap.get('id') || '';

    //Get specific generation from backend
    this.api.getGeneration(this.generationId).subscribe({
      next: (res: any) => {
        console.log('THIS IS THE GENERATION: ', res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    this.spiral = this.api.getGenerationn(this.generationId);
  }
}
