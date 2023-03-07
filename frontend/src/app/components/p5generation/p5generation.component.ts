import { Component, Input } from '@angular/core';
import { P5spiral } from 'src/app/classes/p5spiral';
import * as p5 from 'p5';

@Component({
  selector: 'app-p5generation',
  templateUrl: './p5generation.component.html',
  styleUrls: ['./p5generation.component.scss'],
})
export class P5generationComponent {
  @Input() params: P5spiral = {
    dotSize: 0,
    radius: 0,
    irrationalDenominator: 0,
    shapeCount: 0,
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.params);

    const sketch = (s: p5) => {
      //params todo: make these inputs
      const dotSize = this.params.dotSize;
      const radius = Math.sqrt(0.5) + this.params.dotSize; //add dotsize to prevent popin
      const irrationalDenominator = this.params.irrationalDenominator;
      const shapeCount = this.params.shapeCount;
      const frames = 1000;

      const normalizedCosine = (t: number) => {
        return s.cos(t * s.TWO_PI) * 0.5 + 0.5;
      };

      const signalCosine = (t: number) => {
        return 1 - normalizedCosine(t);
      };

      s.setup = () => {
        let canvas = s.createCanvas(700, 700);
        canvas.parent('p5display');
        s.noStroke();
        s.colorMode(s.RGB, 1); //this is to make the color values between 0 and 1
      };

      s.draw = () => {
        //frameCounts is a p5.js variable that counts the number of frames that have passed

        let time = s.fract(s.frameCount / frames); //keep this a fraction between 0 and 1

        s.scale(s.width, s.height); //normalizes the coordinates for x and y coordinates
        s.background(0);
        s.fill(1);

        const count = shapeCount * signalCosine(time);
        for (let i = 0; i < count; i++) {
          const fraction = i / count; //fraction of the circle
          const distance = (i / count) * radius; //disance of dot from center
          const angle = i / irrationalDenominator; //number of spits in the circle

          //Generate dot
          const x = 0.5 + s.cos(angle * s.TWO_PI) * distance;
          const y = 0.5 + s.sin(angle * s.TWO_PI) * distance;

          const sig = normalizedCosine(fraction);
          const r = sig * dotSize * fraction;
          s.rect(x, y, r, r);
        }
      };
    };

    new p5(sketch);
  }
}
