export class AutomataService {
    aliveProbability = .2;
    canvas;
    container;
    context;
    cellSize = 3;
    fps = 12;
    fpsMs = 1000 / this.fps;
    grid;
    gridX;
    gridY;
    isRunning = false;
    lastRender = new Date().getTime();
    lastTick = new Date().getTime();
    constructor(element) {
        this.container = element;
        
        // create a canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        
        // init grid
        this.grid = this.setupGrid(this.canvas.width, this.canvas.height);
        this.render(); // render initial state immediately

        // resize
        window.addEventListener('resize', () => {
            this.canvas.width = this.container.clientWidth;
            this.canvas.height = this.container.clientHeight;
            this.grid = this.setupGrid(this.canvas.width, this.canvas.height);
            this.render(); // render initial state immediately
        });
    }

    setupGrid (width, height) {
        this.gridX = Math.floor(width / this.cellSize) + 1;
        this.gridY = Math.floor(height / this.cellSize) + 1;
        const grid = [];
        for (let x = 0; x < this.gridX; x++) {
            grid[x] = [];
            for (let y = 0; y < this.gridY; y++) {
                grid[x][y] = Math.random() < this.aliveProbability;
            }
        }
        return grid;
    }

    countAliveNeighbours(x, y) {
        let aliveCellsCount = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // don't check same cell
                if (i === 0 && j === 0) continue;

                let ix = x + i;
                let jy = y + j;

                // normalize indexes to wrap around grid
                if (ix < 0) ix = this.gridX - 1;
                if (ix >= this.gridX) ix = 0;
                if (jy < 0) jy = this.gridY - 1;
                if (jy >= this.gridY) jy = 0;

                if (this.grid[ix][jy]) aliveCellsCount++;
            }
        }
        return aliveCellsCount;
    }

    start () {
        this.isRunning = true;
        this.tick();
    }

    stop () {
        this.isRunning = false;
    }

    render () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let y = 0; y < this.gridY; y++) {
            const cellHeight = y * this.cellSize;
            const distance = (this.canvas.height - cellHeight) / this.canvas.height
            const alpha = distance * .2;
            for (let x = 0; x < this.gridX; x++) {
                if (this.grid[x][y] === true) {
                    const cellWidth = x * this.cellSize;
                    this.context.fillStyle = `rgba(0,0,0,${alpha})`;
                    this.context.fillRect(
                        cellWidth,
                        cellHeight,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }  
        }
    }

    tick() {
        const now = new Date().getTime();
        const delta = now - this.lastTick;

        if (delta > this.fpsMs) {
            this.update();
            this.render();
            this.lastTick = now;
        }

        if (this.isRunning) {
            requestAnimationFrame(() => this.tick());
        }
    }

    update() {
        const newGrid = [];
        for (let x = 0; x < this.gridX; x++) {
            newGrid[x] = [];
            for (let y = 0; y < this.gridY; y++) {
                const isAlive = this.grid[x][y];
                const aliveNeighbours = this.countAliveNeighbours(x, y);

                // rules of survivability, modified from Conway's game to increase the
                // amount of alive cells on grid
                if (isAlive) {
                    newGrid[x][y] = (aliveNeighbours === 2 || aliveNeighbours === 3);
                } else {
                    newGrid[x][y] = aliveNeighbours === 3;
                }
            }
        }
        this.grid = newGrid;
    }
}