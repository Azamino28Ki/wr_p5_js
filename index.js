import p5 from 'p5';
export default class extends p5 {
    constructor(...args){
      super(...args);
    };
   
    createCanvas(){
      super.createCanvas();
      this.wrap_element = this.canvas.parentElement;
      super.resizeCanvas(this.wrap_element.clientWidth, this.wrap_element.clientHeight);
    };
};