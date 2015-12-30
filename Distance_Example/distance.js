var gtools = require('geo-tools');

 var dist= distance({lat:45.451058 , lng:-122.997787},{lat:40.090814, lng:-105.184868});

 var miles = toMiles(dist);
 var meters = toMeters(dist);
 var yards = toYards(dist);
 var feet = toFeet(dist);

console.log("===Distances using the conversion functions===");
 console.log("distance(km): "+ dist);
 console.log("distance(miles): " + miles);
 console.log("distance(meters): "+ meters);
 console.log("distance(yards): " + yards);
 console.log("distance(feet): "+ feet);
