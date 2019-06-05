function size ()
{
	return Math.random() * 16;
}

function randw()
{
	return Math.random() * innerWidth ;
}

function randh()
{
	return Math.random() * innerHeight ;
}


for (var i = 1; i <= 4000; ++i)
{
	c.fillStyle = '#ff6f3f';
	c.fillRect (randw(), randh(), size() , size() );
	console.log(canvas);
}

for (var i = 1; i <= 2000; ++i)
{
	c.strokeStyle = '#f77a3b';
	c.beginPath();
    c.moveTo(randw(), randh());    
    c.lineTo(randw(), randh()); 
	c.stroke();
}



