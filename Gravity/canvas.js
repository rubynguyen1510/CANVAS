var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = 
{
	x: innerWidth ,
	y: innerHeight 
};

var colors = 
[
	'#A8CBFF',
	'#BAD3ED',
	'#A8D4FF',
	'#74A8DC',
	'#51A9FF',
];

var gravity = 0.25;
var friction = 0.8;


// Event Listeners
addEventListener("mousemove", function(event) 
							{
								mouse.x = event.clientX;
								mouse.y = event.clientY;
							});

addEventListener("resize", function() 
						{
							canvas.width = innerWidth;	
							canvas.height = innerHeight;
						  init();
						});

addEventListener("click", function(event) 
						{
							init();
						});


// Utility Functions
function randomIntFromRange(min,max) 
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) 
{
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Ball(x, y, dx, dy, radius, color) 
{
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() 
				{
					if (this.y + this.radius + this.dy> canvas.height) {
						this.dy = -this.dy;
						this.dy = this.dy * friction;
						this.dx = this.dx * friction;
					} else {
						this.dy += gravity;
					}

					if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
						this.dx = -this.dx * friction;
					}

					this.x += this.dx;
					this.y += this.dy;
					this.draw();
				};

	this.draw = function() 
				{
					c.beginPath();
					c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
					c.fillStyle = this.color;
					c.strokeStyle = this.color;
					c.fill();
					c.stroke();
					c.closePath();
				};
}


// Implementation
var ballArray = [];

function init() {
	ballArray = [];

	for (let i = 1; i <= 500; ++i) 
	{
		var radius = randomIntFromRange(1, 3);
		var x = randomIntFromRange(radius, canvas.width - radius), y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-2, 2), dy = randomIntFromRange(-1, 1);
	    ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 1; i <= ballArray.length; ++i) 
		ballArray[i].update();
}

init();
animate();

//References: https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA
