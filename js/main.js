var planetArray = [
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
			description:"Not a Planet, but still very important. the Sun is the star at the center of the Solar System and is by far the most important source of energy for life on Earth."
		}
	]

function getInfo() {

	var userInput = document.getElementById("search").value.toUpperCase();
	var oops = "Oops! That's not a planet. Try again.";

	for ( i = 0; i < planetArray.length; i++ ) {
		if ( userInput === planetArray[i].planet ) {

			// Injects correlating planet info
			document.getElementById("Planet").innerHTML = planetArray[i].planet;
			document.getElementById("img").setAttribute("src", planetArray[i].img);
			document.getElementById("description").innerHTML = planetArray[i].description;
			document.getElementById("description").className = "descrip animated zoomIn";
			document.getElementById('Planet').className = "animated zoomIn";
			document.getElementById("img").className = "img-responsive animated zoomIn";

			// Makes planets spin after zooming in
			setTimeout(function(){ 
				$('#img').addClass('rotate-planet'); 
			}, 900);
			return;
		} 
	} 

	document.getElementById("Planet").innerHTML = oops;
	document.getElementById("description").innerHTML = "";
	document.getElementById('img').className = "hide";
}

// Runs function on enter key input
$("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});

document.getElementById('button').addEventListener('click', getInfo, false);

