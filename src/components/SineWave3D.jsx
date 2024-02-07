// src/components/SineWave3D.js
import React, { useEffect } from 'react';
import p5 from 'p5';

const SineWave3D = () => {
  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400, p.WEBGL);
        p.angleMode(p.DEGREES);
      };

      p.draw = () => {
        p.clear();
        p.background(25);
        p.rotateX(60);
        p.noFill();
        p.stroke(255);
        

        for (let i = 0; i < 20; i++) {
          p.beginShape();
          for (let j = 0; j < 360; j += 10) {
            let rad = i * 8;
            let x = rad * p.cos(j);
            let y = rad * p.sin(j);
            let z = p.sin(p.frameCount + i * 10) * 50;

            p.vertex(x, y, z);
          }
          p.endShape(p.CLOSE);
        }
      };
    };
    

    new p5(sketch);
  }, []);
  

  return <div id="sine-wave-3d-container"></div>;
};

export default SineWave3D;
