export class AutomataService {
  aliveProbability = 0.2;
  canvas: HTMLCanvasElement | undefined;
  container;
  context;
  cellSize = 8;
  fadeOut;
  updateTimeInMs = 1000 / 8;
  renderTimeInMs = 1000 / 24;
  grid: boolean[];
  gridWidth = 300;
  gridHeight = 400;
  gridArrayLength = 0;
  isRunning = false;
  lastTick = new Date().getTime();
  lastUpdate = 0;
  lastRender = 0;
  backgroundFillStyle = "rgba(10,10,10,.35)";
  fillColour = {
    red: 150,
    green: 90,
    blue: 150,
    alpha: 0.06,
  };
  isMouseDown = false;
  currentMousePosition = 0;
  currentMousePositionY = 0;

  constructor(element: HTMLElement, fadeOut = false) {
    this.fadeOut = fadeOut;
    this.container = element;

    // create a canvas
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.container.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    // init grid
    this.grid = this.setupGrid(this.canvas.width, this.canvas.height);
    this.render(); // render initial state immediately

    // resize
    globalThis.addEventListener("resize", this.onWindowResize.bind(this));
    globalThis.addEventListener("mousedown", this.onMouseDown.bind(this));
    globalThis.addEventListener("mouseup", this.onMouseUp.bind(this));
    globalThis.addEventListener("touchstart", this.onMouseDown.bind(this));
    globalThis.addEventListener("touchend", this.onMouseUp.bind(this));
    globalThis.addEventListener("mousemove", this.onMouseMove.bind(this));
    globalThis.addEventListener("touchmove", this.onTouchMove.bind(this));
  }

  onWindowResize() {
    if (!this.canvas) return;

    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.grid = this.setupGrid(this.canvas.width, this.canvas.height);
    this.render(); // render initial state immediately
  }

  /**
   * Starts drawing cells as alive.
   */
  onMouseDown() {
    this.isMouseDown = true;
  }

  /**
   * Stops drawing cells into grid on mouse up.
   */
  onMouseUp() {
    this.isMouseDown = false;
  }

  /**
   * Saves the current mouse coordinates so we can render a ghost
   * cell on the grid.
   */
  onMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;

    // figure out location in grid
    const gridX = Math.floor(clientX / this.cellSize);
    const gridY = Math.floor(clientY / this.cellSize);

    this.currentMousePosition = this.getGridArrayLocation(gridX, gridY);
  }

  /**
   * Saves the current mouse coordinates so we can render a ghost
   * cell on the grid.
   */
  onTouchMove(e: TouchEvent) {
    const { clientX, clientY } = e.touches[0];

    // figure out location in grid
    const gridX = Math.floor(clientX / this.cellSize);
    const gridY = Math.floor(clientY / this.cellSize);

    this.currentMousePosition = this.getGridArrayLocation(gridX, gridY);
  }

  destroy() {
    if (!this.canvas) return;

    this.canvas.parentNode?.removeChild(this.canvas);
  }

  setupGrid(width: number, height: number) {
    this.gridWidth = Math.floor(width / this.cellSize) + 1;
    this.gridHeight = Math.floor(height / this.cellSize) + 1;
    this.gridArrayLength = this.gridWidth * this.gridHeight;
    const grid = new Array(this.gridArrayLength);
    for (let i = 0; i < this.gridArrayLength; i++) {
      grid[i] = Math.random() < this.aliveProbability;
    }
    return grid;
  }

  getGridArrayLocation(x: number, y: number) {
    return y * this.gridWidth + x;
  }

  countAliveNeighbours(x: number, y: number) {
    let aliveCellsCount = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // don't check same cell
        if (i === 0 && j === 0) continue;

        let ix = x + i;
        let jy = y + j;

        // normalize indexes to wrap around grid
        if (ix < 0) ix = this.gridWidth - 1;
        if (ix >= this.gridWidth) ix = 0;
        if (jy < 0) jy = this.gridHeight - 1;
        if (jy >= this.gridHeight) jy = 0;

        if (this.grid[this.getGridArrayLocation(ix, jy)]) aliveCellsCount++;
      }
    }
    return aliveCellsCount;
  }

  start() {
    this.isRunning = true;
    this.tick();
  }

  stop() {
    this.isRunning = false;
  }

  render() {
    if (!this.context || !this.canvas) return;

    this.context.fillStyle = this.backgroundFillStyle;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.gridArrayLength; i++) {
      // determine pixel position of grid cell
      const x = i % this.gridWidth;
      const cellLeft = x * this.cellSize;
      const y = Math.floor(i / this.gridWidth);
      const cellTop = y * this.cellSize;

      if (this.grid[i]) {
        this.context.fillStyle =
          `rgba(${this.fillColour.red}, ${this.fillColour.green}, ${this.fillColour.blue}, ${this.fillColour.alpha})`;
        this.context.fillRect(
          cellLeft,
          cellTop,
          this.cellSize - 1,
          this.cellSize - 1,
        );
      } else if (this.currentMousePosition === i) {
        this.context.fillStyle =
          `rgba(${this.fillColour.red}, ${this.fillColour.green}, ${this.fillColour.blue}, .4)`;
        this.context.fillRect(
          cellLeft,
          cellTop,
          this.cellSize - 1,
          this.cellSize - 1,
        );
      }
    }
  }

  tick() {
    const now = new Date().getTime();
    const delta = now - this.lastTick;
    this.lastTick = now;

    if (this.isMouseDown) {
      // turn grid coordinate to alive
      this.grid[this.currentMousePosition] = true;
    }

    this.lastUpdate += delta;
    if (this.lastUpdate > this.updateTimeInMs) {
      this.update();
      this.lastTick = now;
      this.lastUpdate = 0;
    }

    this.lastRender += delta;
    if (this.lastRender > this.renderTimeInMs) {
      this.render();
      this.lastRender = 0;
    }

    if (this.isRunning) {
      requestAnimationFrame(() => this.tick());
    }
  }

  update() {
    const newGrid = new Array(this.gridArrayLength);
    for (let i = 0; i < this.gridArrayLength; i++) {
      const isAlive = this.grid[i];

      const x = i % this.gridWidth;
      const y = Math.floor(i / this.gridWidth);
      const aliveNeighbours = this.countAliveNeighbours(x, y);

      // rules of survivability, modified from Conway's game to increase the
      // amount of alive cells on grid
      if (isAlive) {
        newGrid[i] = aliveNeighbours === 2 || aliveNeighbours === 3;
      } else {
        newGrid[i] = aliveNeighbours === 3;
      }
    }
    this.grid = newGrid;
  }
}
