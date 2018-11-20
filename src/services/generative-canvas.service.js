import Automata from '../utils/automata.js';

let context,
    running = false,
    fps = 60,
    tickTime = 1000 / fps,
    grid,
    gridWidth,
    gridHeight,
    automata,
    iteration = 0;
const cellWidth = 25,
    cellHeight = 25,
    hueMax = 360,
    hueMin = 0,
    saturationMax = 70,
    saturationMin = 60,
    lightMax = 50,
    lightMin = 1;
let now, then = Date.now(), delta;
function tick() {
    if (running) requestAnimationFrame(tick);
    now = Date.now();
    delta = now - then;
    if (delta > tickTime) {
        then = now - (delta % tickTime);
        update();
        draw();
    }
}
function update() {
    iteration++;
    // update is run 60 fps, update automata every 4 frames
    if (iteration % (fps / 1) === 0) {
        if (automata.isEmpty || automata.isStale) {
            automata = new Automata(gridWidth, gridHeight);
            console.log(automata);
        } else {
            automata.next();
        }
    }

    for (let i = 0; i < gridWidth; i++) { // row
        for (let j = 0; j < gridHeight; j++) { // column
            const cell = grid[i][j];

            cell.hue = cell.hue + (1 * cell.hueDirection);
            if (cell.hue >= hueMax) cell.hueDirection = -1;
            if (cell.hue <= hueMin) cell.hueDirection = 1;

            cell.saturation = cell.saturation + (1 * cell.saturationDirection);
            if (cell.saturation >= saturationMax) cell.saturationDirection = -1;
            if (cell.saturation <= saturationMin) cell.saturationDirection = 1;

            cell.light = cell.light + (1 * cell.lightDirection);
            if (cell.light >= lightMax) cell.lightDirection = -1;
            if (cell.light <= lightMin) cell.lightDirection = 1;

            cell.alive = automata.getGrid()[i][j];
        }
    }
}
function draw() {
    // clear canvas
    const canvas = context.canvas;
    context.fillStyle = '#141414';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            const cell = grid[i][j];
            if (cell.alive) {
                context.fillStyle = `hsl(${cell.hue},${cell.saturation}%,${cell.light}%)`;
                context.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
        }
    }
}

const service = {
    init: (ctx) => {
        context = ctx;
        const canvas = context.canvas;
        canvas.width = context.canvas.clientWidth;
        canvas.height = context.canvas.clientHeight;

        window.addEventListener('resize', () => {
            canvas.width = context.width = window.innerWidth;
            canvas.height = context.height = window.innerHeight;
        });

        // build cell grid
        grid = [];
        gridWidth = Math.floor(canvas.width / cellWidth) + 1; // +1 to draw past edge of canvas
        gridHeight = Math.floor(canvas.height / cellHeight) + 1;

        // initiate automata
        automata = new Automata(gridWidth, gridHeight);

        console.log(automata);

        // write out grid cells
        for (let i = 0; i < gridWidth; i++) { // row
            grid[i] = [];
            for (let j = 0; j < gridHeight; j++) { // column
                const hueRange = hueMax - hueMin;
                const hue = Math.floor(Math.random() * hueRange) + hueMin;
                const saturationRange = saturationMax - saturationMin;
                const saturation = Math.floor(Math.random() * saturationRange) + saturationMin;
                const lightRange = lightMax - lightMin;
                const light = Math.floor(Math.random() * lightRange) + lightMin;
                grid[i][j] = {
                    hue: hue,
                    hueDirection: 1,
                    saturation: saturation,
                    saturationDirection: 1,
                    light: light,
                    lightDirection: 1,
                    alive: automata.getGrid()[i][j]
                };
            }
        }
    },
    start: () => {
        if (context === undefined) throw Error('Context not initialized.');
        running = true;
        tick();
    },
    stop: () => {
        running = false;
    }
}
export default service;
