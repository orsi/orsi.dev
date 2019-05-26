import Automata from '../utils/automata.js';

export class AutomataService {
    interval;
    automata;
    container;
    canvas;
    lastTime = new Date().getTime();
    cellSize = 2;
    constructor(element) {
        this.container = element;
        // create a canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.automata = new Automata(this.canvas.width, this.canvas.height);
    }
    start () {
        this.interval = setInterval(() => this.draw(), 16);
    }
    stop () {
        clearInterval(this.interval);
    }
    draw() {
        const now = new Date().getTime();
        const delta = now - this.lastTime;

        if (delta > 1000 / 12) {
            this.clear();
            this.context.fillStyle = 'hsla(220, 50%, 50%, .2)';
            this.automata.next();
            const grid = this.automata.getGrid();
            for (let x = 0; x < this.automata.width; x++) {
                for (let y = 0; y < this.automata.height; y++) {
                    if (grid[x][y]) {
                        this.context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
                    }
                }
            }
            this.lastTime = now;
        }
    }
    clear () {
        this.context.fillStyle = '#f5f5f5';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}