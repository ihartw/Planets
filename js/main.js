


var plaNets = [
	{
		planet:"MERCURY",
		img:"img/mercury.png",
		description:"Mercury is the smallest planet in the Solar System and the one closest to the Sun, with an orbital period of about 88 Earth days, which is much faster than any other planet in the Solar System."
	},
	{
		planet:"VENUS",
		img:"img/Venus.png",
		description:"Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System, and, unusually, rotates in the opposite direction to most other planets. It has no natural satellite."
	},
	{
		planet:"EARTH",
		img:"img/earthh.png",
		description:"Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life."
	},
	{
		planet:"MARS",
		img:"img/mars.png",
		description:"Mars is the fourth planet from the Sun and the second smallest planet in the Solar System, after Mercury."
	},
	{
		planet:"JUPITER",
		img:"img/jupiter.png",
		description:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined."
	},
	{
		planet:"SATURN",
		img:"img/saturn.png",
		description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth."
	},
	{
		planet:"URANUS",
		img:"img/uranus.png",
		description:"Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
	},
	{
		planet:"NEPTUNE",
		img:"img/neptune.png",
		description:"Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass. Among the giant planets in the Solar System, Neptune is the most dense."
	},
	{
		planet:"SUN",
		img:"img/sun.png",
		description:"The Sun is a daily tabloid newspaper published in the United Kingdom and Ireland. Founded in 1964 as a successor broadsheet to the Daily Herald, it became a tabloid in 1969 after it was purchased by its current owners."
	}
]

var oops = {
	oops:"Oops! That's not a planet!"
}

function getInfo() {
	var planet = document.getElementById("planet").value.toUpperCase()

	for(i = 0; i < plaNets.length; i++) {
		if(planet === plaNets[i].planet) {
			console.log(planet)
			document.getElementById("Planet").innerHTML = plaNets[i].planet
			document.getElementById("img").setAttribute("src", plaNets[i].img)
			document.getElementById("description").innerHTML = plaNets[i].description
			document.getElementById("img").className = "sweetimg animated zoomIn"
			document.getElementById("description").className = "descrip animated zoomIn"
			document.getElementById('Planet').className = "animated zoomIn"
			return
			document.getElementById("oops").innerHTML = oops.oops
		}
	} 
}


