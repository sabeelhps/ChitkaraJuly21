const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');


pen.fillStyle = 'blue';



let init_x;
let init_y;
const W = 900;
const H = 600;


// Initialises the game
function init() {
    init_x = 10;
    init_y = 10;
    pen.fillRect(init_x, init_y, 30, 20);
}

// draw
function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillRect(init_x, init_y, 30, 20);
}

// update

function update() {
    init_x = init_x + 30;
    
}

function gameLoop() {
    update();
    draw();
}


init();

const id=setInterval(gameLoop, 200);

