import { Component } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-p5generation',
  templateUrl: './p5generation.component.html',
  styleUrls: ['./p5generation.component.scss']
})
export class P5generationComponent {
  
  


  ngOnInit(): void {
    
    const sketch = (s: p5) => {

      //params todo: make these inputs
      const dotSize = 0.08
      const radius = Math.sqrt(0.5) + dotSize //add dotsize to prevent popin
      const irrationalDenominator = 1.61803398875
      let t;
      const frames = 1000;

      const normalizedCosine = (t: number) => {
        return s.cos(t * s.TWO_PI) * 0.5 + 0.5;
      }
    
      const signalCosine = (t: number) => {
          return 1 - normalizedCosine(t);
      }

      s.setup = () => { 
        let canvas = s.createCanvas(700, 700)
        canvas.parent('p5display')
        s.noStroke()
        s.colorMode(s.RGB, 1)             
        console.log('asdasdas') //this is to make the color values between 0 and 1
      }

      s.draw = () => {
        
        //frameCounts is a p5.js variable that counts the number of frames that have passed
            
        let time = s.fract(s.frameCount/frames); //keep this a fraction between 0 and 1

        s.scale(s.width, s.height) //normalizes the coordinates for x and y coordinates
        s.background(0);
        s.fill(1);

        const count = 1000 * signalCosine(time);
        for (let i = 0; i < count; i++) {
            const fraction = i/count //fraction of the circle
            const distance = i/count * radius //disance of dot from center
            const angle = i/irrationalDenominator //number of spits in the circle
            
            //Generate dot
            const x = 0.5 + s.cos(angle * s.TWO_PI) * distance
            const y = 0.5 + s.sin(angle * s.TWO_PI) * distance

            const sig = normalizedCosine(fraction)
            const r =   sig * dotSize * fraction 
            s.rect(x, y, r, r)
        }
      }
    }

    new p5(sketch);
  }
  
}
