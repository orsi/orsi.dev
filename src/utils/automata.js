export default class Automata {
    constructor(width, height, options) {
        this.width = width;
        this.height = height;
        this.options = options || {
            aliveProbability: .5
        };
        this.isEmpty = false;
        this.isStale = false;
        this.lastCellCounts = [];
        this.cellCount = 0;
        this.setup(this.options);
    }
    setup (options) {
        this.grid = [];
        for (let i = 0; i < this.width; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.grid[i][j] = Math.random() < options.aliveProbability;
                if (this.grid[i][j]) this.cellCount++;
            }
        }
        this.lastCellCounts.push(this.cellCount);
    }
    getGrid =  () => this.grid;
    next =  () => {
        let newGrid = [];
        let isEmpty = true; // optimizes checking if grid is completely empty
        this.cellCount = 0;

        for (let i = 0; i < this.width; i++) {
            newGrid[i] = [];
            for (let j = 0; j < this.height; j++) {
                const isAlive = this.grid[i][j];
                const aliveNeighbours = this.countAliveNeighbours(i, j);

                // rules of survivability, modified from Conway's game to increase the
                // amount of alive cells on grid
                if (isAlive &&
                    (aliveNeighbours <= 1 || aliveNeighbours >= 4)) {
                    newGrid[i][j] = false;
                } else if (aliveNeighbours >= 2 && aliveNeighbours <= 3) {
                    newGrid[i][j] = true;
                    if (isEmpty) isEmpty = false;
                }
                if (newGrid[i][j]) this.cellCount++;
            }
        }

        // if isEmpty is still true afterwards, this grid is dead
        this.isEmpty = isEmpty;

        // check if grid is stale
        let sameCount = 0;
        for (let i = 0; i < 10; i++) {
            const index = this.lastCellCounts.length - 1 - i;
            if (this.lastCellCounts[index] === this.cellCount) sameCount++;
        }
        // if atleast 5 iterations were the same, consider stale
        if (sameCount >= 5) {
            this.isStale = true;
        }

        // save cellCount
        this.lastCellCounts.push(this.cellCount);
        if (this.lastCellCounts.length > 10) {
            this.lastCellCounts.shift();
        }

        this.grid = newGrid;
    }
    countAliveNeighbours = (x, y) => {
        let aliveCellsCount = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let ix = x + i;
                let jy = y + j;

                // normalize indexes to wrap around grid
                if (ix < 0) ix = this.width - 1;
                if (ix >= this.width) ix = 0;
                if (jy < 0) jy = this.height - 1;
                if (jy >= this.height) jy = 0;

                // don't check same cell
                if (ix === x && jy === y) continue;

                if (this.grid[ix][jy]) aliveCellsCount++;
            }
        }
        return aliveCellsCount;
    }
}