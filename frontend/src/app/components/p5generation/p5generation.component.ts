import { Component, Input, SimpleChange } from '@angular/core';
import { P5spiral } from 'src/app/classes/p5spiral';
import * as p5 from 'p5';

@Component({
  selector: 'app-p5generation',
  templateUrl: './p5generation.component.html',
  styleUrls: ['./p5generation.component.scss'],
})
export class P5generationComponent {
  @Input() params: any = null;
  constructor() {}
  generation?: p5;
  // Need to manually remove the p5 instance to stop draw loop
  ngOnDestroy(): void {
    this.generation?.remove();
  }

  ngOnChanges(): void {
    // Generate canvas and render only when recieved params
    if (!this.params) {
      return;
    }

    // P5 spiral variables
    var dotSize = this.params.dotSize;
    var radius = Math.sqrt(0.5) + this.params.dotSize;
    var irrationalDenominator = this.params.irrationalDenominator;
    var shapeCount = this.params.shapeCount;
    var frames = this.params.frames;
    var light = this.params.light;
    var bgColor = this.params.bgColor;

    const sketch = (s: p5) => {
      s.setup = () => {
        var canvas = s.createCanvas(700, 700);
        canvas.parent('p5display');
        s.noStroke();
        s.colorMode(s.HSL, 1); //this is to make the color values between 0 and 1
      };

      const normalizedCosine = (t: number) => {
        return s.cos(t * s.TWO_PI) * 0.5 + 0.5;
      };

      const signalCosine = (t: number) => {
        return 1 - normalizedCosine(t);
      };

      s.draw = () => {
        s.scale(s.width, s.height); //normalizes the coordinates for x and y coordinates
        //frameCounts is a p5.js variable that counts the number of frames that have passed
        let time = s.fract(s.frameCount / frames); //keep this a fraction between 0 and 1
        //s.background(s.color(0.5, 0.2, 0.5));
        s.background(bgColor);

        const count = shapeCount * signalCosine(time);
        for (let i = 0; i < count; i++) {
          const fraction = i / count; //fraction of the circle
          const distance = (i / count) * radius; //disance of dot from center
          const angle = i / irrationalDenominator; //number of spits in the circle

          //Generate dot
          const x = 0.5 + s.cos(angle * s.TWO_PI) * distance;
          const y = 0.5 + s.sin(angle * s.TWO_PI) * distance;

          const sig = normalizedCosine(fraction - time);
          const r = sig * dotSize * fraction;
          //const r =  dotSize * fraction;

          //Generate color
          var hue = fraction;

          //reverse color around mouse
          if (s.dist(s.mouseX / 700, s.mouseY / 700, x, y) < 0.3) {
            hue = 1 - fraction;
          }
          const sat = 1;

          const clr = s.color(hue, sat, light);
          s.fill(clr);

          s.circle(x, y, r);
        }
      };
    };

    this.generation = new p5(sketch);
  }
}
