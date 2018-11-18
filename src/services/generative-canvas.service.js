export default class GenerativeCanvasService {
    context;
    constructor(context) {
        this.context = context;
    }
    start() {
        // draw a red circle
        const width = this.context.canvas.width / 2;
        const height = this.context.canvas.height / 2;
        const radius = 100;
        this.context.fillStyle = 'red';
        this.context.beginPath();
        this.context.arc(width, height, radius, 0, Math.PI * 2, false);
        this.context.fill();
    }
}