export class ScribbleService {
    container;
    canvas;
    context;
    running = false;
    lastTime = new Date().getTime();
    fps = 30;
    frameRate = 1000 / this.fps;
    frame = 0;

    lastState;
    brushSize = 4;
    hueDirection = 1;
    saturationDirection = 1;
    lightDirection = 1;
    controlPointRange = 200;

    constructor(element) {
        this.container = element;
        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.context = this.canvas.getContext('2d');
        this.lastState = {
            x: Math.round(Math.random() * this.canvas.width),
            y: Math.round(Math.random() * this.canvas.height),
            hue: Math.round(Math.random() * 360),
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
            const cpx = x + (Math.round(Math.random() * this.controlPointRange) - 150);
            const cpy =  y + (Math.round(Math.random() * this.controlPointRange) - 150);
            let hue = this.lastState.hue + this.hueDirection;
            if (hue < 180 || hue > 270) this.hueDirection *= -1;
            let saturation = this.lastState.saturation + this.saturationDirection * 5;
            if (saturation < 30 || saturation > 70) this.saturationDirection *= -1;
            let light = this.lastState.light + this.lightDirection * 5;
            if (light < 30 || light > 70) this.lightDirection *= -1;
            this.context.strokeStyle = `hsla(${hue}, ${saturation}%, ${light}%, .5)`;
            this.context.beginPath();
            this.context.moveTo(this.lastState.x, this.lastState.y);
            this.context.quadraticCurveTo(cpx, cpy, x, y);
            this.context.closePath();
            this.context.stroke();

            // console.log(`${delta} ${x} ${y}`);
            // update variables
            this.lastTime = now;
            this.lastState.x = x;
            this.lastState.y = y;
            this.lastState.hue = hue;
            this.lastState.saturation = saturation;
            this.lastState.light = light;

            this.frame++;
            if (this.frame > 120) this.stop();
        }

        if (this.running) requestAnimationFrame(_ => this.draw());
    }
}