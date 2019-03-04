export class MondrianService {
    white = '#f2f5f1';
    colors = ['#D40920', '#1356A2', '#F7D842'];
    constructor(element) {
        this.container = element;
        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);

        // setup canvas width/height properly for retina
        // and non-retina displays
        const dpr = window.devicePixelRatio || 1;
        const width = this.container.clientWidth * dpr;
        const height = this.container.clientHeight * dpr;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = Math.round(width / dpr) + 'px';
        this.canvas.style.height = Math.round(height / dpr) + 'px';
        this.context = this.canvas.getContext('2d');
        this.context.scale(dpr, dpr);
        this.context.lineWidth = 8;

        // determines maximum columns/rows
        this.step = Math.floor(this.canvas.width / 10);

        // create square array with base square
        this.squares = [
            {
                x: 0,
                y: 0,
                width: this.container.clientWidth,
                height: this.container.clientHeight
            }
        ];

        // split up canvas area squares
        for (let i = 0; i < this.canvas.width; i += this.step) {
            this.splitSquaresWith({ x: i })
            this.splitSquaresWith({ y: i })
        }
    }

    start() {
        this.draw();
    }

    /**
     * Splits a square at specified coordinate
     * @param {*} coordinates
     */
    splitSquaresWith(coordinates) {
        const { x, y } = coordinates;
        for (let i = this.squares.length - 1; i >= 0; i--) {
            const square = this.squares[i];
            if (x && x > square.x + 10 && x < square.x + square.width - 10) {
                if (Math.random() > 0.5) {
                    this.squares.splice(i, 1);
                    this.splitOnX(square, x);
                }
            }

            if (y && y > square.y + 10 && y < square.y + square.height - 10) {
                if (Math.random() > 0.5) {
                    this.squares.splice(i, 1);
                    this.splitOnY(square, y);
                }
            }
        }
    }

    /**
     * Splits a square on the x-axis
     * @param {*} square
     * @param {*} splitAt
     */
    splitOnX(square, splitAt) {
        let squareA =  {
            x: square.x,
            y: square.y,
            width: square.width - (square.width - splitAt + square.x),
            height: square.height
        };

        let squareB = {
            x: splitAt,
            y: square.y,
            width: square.width - splitAt + square.x,
            height: square.height
        };

        this.squares.push(squareA, squareB);
    }
    /**
     * Splits a square on the y-axis
     * @param {*} square
     * @param {*} splitAt
     */
    splitOnY(square, splitAt) {
        let squareA =  {
            x: square.x,
            y: square.y,
            width: square.width,
            height: square.height - (square.height - splitAt + square.y)
        };

        let squareB = {
            x: square.x,
            y: splitAt,
            width: square.width,
            height: square.height - splitAt + square.y
        };

        this.squares.push(squareA, squareB);
    }
    draw() {
        // assign random colour to random amount of squares
        for (let i = 0; i < Math.floor(Math.random() * this.squares.length); i++) {
            this.squares[Math.floor(Math.random() * this.squares.length)].color = this.colors[Math.floor(Math.random() * this.colors.length)];
        }

        // draw the final result
        for (let i = 0; i < this.squares.length; i++) {
            this.context.beginPath();
            this.context.rect(
                this.squares[i].x,
                this.squares[i].y,
                this.squares[i].width,
                this.squares[i].height
            );
            if(this.squares[i].color) {
                this.context.fillStyle = this.squares[i].color;
            } else {
                this.context.fillStyle = this.white;
            }
            this.context.fill()
            this.context.stroke();
        }
    }
}