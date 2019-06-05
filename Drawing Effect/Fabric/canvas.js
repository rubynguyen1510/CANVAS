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


for (var i = 1; i <= 3500; ++i)
{
	c.fillStyle = '#ff6f3f';
	c.fillRect (randw(), randh(), size()*4 , size() );
	console.log(canvas);
}

for (var i = 1; i <= 3500; ++i)
{
	c.fillStyle = '#ff6f3f';
	c.fillRect (randw(), randh(), size(), size()*4 );
	console.log(canvas);
}



