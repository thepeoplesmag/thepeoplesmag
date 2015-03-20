// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

		//Good Stuff

new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.652177, 
		lon: -117.34789,
		zoom: 17
			}]
		}).Load(); 

	console.log('Page Loaded. Lets Do this!');

}); 



