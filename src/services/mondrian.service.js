export class MondrianService {
    white = 'rgba(255,255,255,1)';
    colours = [
        'rgba(209, 10, 15, 1)', 
        'rgba(61,72,126, 1)', 
        'rgba(253, 209, 0, 1)'
    ];
    constructor(element) {
        this.container = element;
        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.setupCanvas();
        this.setup();

        // resize
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.setup();
            this.render(); // render initial state immediately
        });
    }

    render() {
        // assign random colour randomly to squares
        for (let i = 0; i < this.squares.length; i++) {
            if (Math.random() < 0.66) { // 2/3 chance to be coloured
                this.squares[i].colour = this.colours[
                    Math.floor(Math.random() * this.colours.length)
                ];
            }
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
            if(this.squares[i].colour) {
                this.context.fillStyle = this.squares[i].colour;
            } else {
                this.context.fillStyle = this.white;
            }
            this.context.fill()
            this.context.stroke();
        }
    }

    setup() {
        // determines maximum columns/rows
        this.step = Math.floor(this.container.clientWidth / 25);

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

    setupCanvas() {
        // setup canvas width/height properly for retina
        // and non-retina displays
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.container.clientWidth * dpr;
        this.canvas.height = this.container.clientHeight * dpr;
        this.canvas.style.width = Math.round(this.canvas.width / dpr) + 'px';
        this.canvas.style.height = Math.round(this.canvas.height / dpr) + 'px';
        this.context = this.canvas.getContext('2d');
        this.context.scale(dpr, dpr);
        this.context.lineWidth = 8;
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

    start() {
        this.render();
    }

}