var gtools = require('geo-tools');

var from = {
   name: 'home',
   lat: 45.451058,
   lng: -122.997797
}

var to = {
   name: 'work',
   lat:40.090814,
   lng:-105.184868
}

 var dist= distance(from,to);

 var miles = toMiles(dist);
 var meters = toMeters(dist);
 var yards = toYards(dist);
 var feet = toFeet(dist);

console.log("===Distances from " + from.name + " to " + to.name+ " using conversions===");
 console.log("distance(km): "+ dist);
 console.log("distance(miles): " + miles);
 console.log("distance(meters): "+ meters);
 console.log("distance(yards): " + yards);
 console.log("distance(feet): "+ feet);
