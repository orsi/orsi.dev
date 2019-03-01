export class ScribbleService {
    container;
    canvas;
    context;
    running = false;
    lastTime = new Date().getTime();
    fps = 15;
    frameRate = 1000 / this.fps;

    lastPoint;
    brushSize = 4;
    hueDirection = 1;
    saturationDirection = 1;
    lightDirection = 1;

    constructor(element) {
        this.container = element;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.context = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        this.lastPoint = {
            x: Math.round(Math.random() * this.canvas.width),
            y: Math.round(Math.random() * this.canvas.height),
            hue: 245,
            saturation: 50,
            light: 50
        };

        console.log(this);
    }

    start () {
        this.running = true;
        requestAnimationFrame(_ => this.draw())
    }
    stop () {
        this.running = false;
    }

    draw  () {
        const now = new Date().getTime();
        const delta = now - this.lastTime;

        if (delta > this.frameRate) {
            // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const x = Math.round(Math.random() * this.canvas.width);
            const y =  Math.round(Math.random() * this.canvas.height);
            let hue = this.lastPoint.hue + this.hueDirection * 5;
            if (hue < 180 || hue > 280) this.hueDirection *= -1;
            let saturation = this.lastPoint.saturation + this.saturationDirection * 5;
            if (saturation < 40 || saturation > 80) this.saturationDirection *= -1;
            let light = this.lastPoint.light + this.lightDirection * 5;
            if (light < 40 || light > 80) this.lightDirection *= -1;
            this.context.strokeStyle = `hsl(${hue}, ${saturation}%, ${light}%)`;
            this.context.beginPath();
            this.context.moveTo(this.lastPoint.x, this.lastPoint.y);
            this.context.lineTo(x, y);
            this.context.closePath();
            this.context.stroke();

            // console.log(`${delta} ${x} ${y}`);
            // update variables
            this.lastTime = now;
            this.lastPoint.x = x;
            this.lastPoint.y = y;
            this.lastPoint.hue = hue;
            this.lastPoint.saturation = saturation;
            this.lastPoint.light = light;
        }

        if (this.running) requestAnimationFrame(_ => this.draw());
    }
}