let context, running = false, fps = 1000 / 16, cellWidth, cellHeight, grid, gridLength, gridWidth, iteration = 0;
const hueMax = 360,
    hueMin = 0,
    saturationMax = 80,
    saturationMin = 20,
    lightMax = 35,
    lightMin = 20;
const service = {
    init: (ctx) => {
        context = ctx;
        const canvas = context.canvas;
        context.canvas.width = context.canvas.clientWidth;
        context.canvas.height = context.canvas.clientHeight;
        cellWidth = cellHeight = 10;

        // build cell grid
        grid = [];
        gridLength = Math.floor(canvas.height / cellHeight) + 1; // +1 to draw past edge of canvas
        gridWidth = Math.floor(canvas.width / cellWidth) + 1;
        for (let i = 0; i < gridLength; i++) { // row
            grid[i] = [];
            for (let j = 0; j < gridWidth; j++) { // column
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

let now, then = Date.now(), delta;
function tick() {
    if (running) requestAnimationFrame(tick);
    now = Date.now();
    delta = now - then;
    if (delta > fps) {
        then = now - (delta % fps);
        update();
        draw();
    }
}
function update() {
    iteration++;
    for (let i = 0; i < gridLength; i++) { // row
        for (let j = 0; j < gridWidth; j++) { // column
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
        }
    }
}
function draw() {
    // clear canvas
    const canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridWidth; j++) {
            const cell = grid[i][j];
            const hue = cell.hue;
            const saturation = cell.saturation;
            const light = cell.light;
            context.fillStyle = `hsl(${hue},${saturation}%,${light}%)`;
            context.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
    }
}