class Counter {
    constructor(el, start, end) {
      this.el = el;
      this.START = start;
      this.END = end;
      this.time = 0;
      this.count = this.START;
      this.countRev = this.END;
      this.increase = false;
    };
  
    init() {
      this._animateCounter();
    };
  
    animate() {
      const $bar = $(this.el).find('[data-progress]');
      const $counter = $(this.el).find('.progress__nmb');
        
      if (this.time%10 === 0) {       
        if (this.count === this.START) {
          this.increase = true;
        };
        if (this.count === this.END) {
          this.increase = false;
        };
        if (this.increase) {
          this.count++;
          this.countRev--;
        } else {
          this.count--;
          this.countRev++;
        };
  
        $counter.html(this.count);
        $bar.attr('data-progress', this.countRev);
      };
    };
  
    _animateCounter() {
      const render = () => {
        this.animate();
        this.time++;      
        window.requestAnimationFrame(render);
      };    
      render();
    };
  };
  
  export default function animateProgress() {
    const $progress = $('.js-progress');
    
    $progress.each(function(index, el) {
      const counter = new Counter(el, 0, 100);
      counter.init();
    });
  };