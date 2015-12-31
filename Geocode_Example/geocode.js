var gtools = require('geo-tools');

var address = '9685 SW 163rd AVE, Beaverton, OR';

geocode(address, function(coords){
   console.log("===Raw response===");
   console.log(coords);
   console.log('');
   console.log("===Parsed Data===");
   console.log("Latitude: " + coords.lat);
   console.log("Longitude: "+ coords.lng);

});
