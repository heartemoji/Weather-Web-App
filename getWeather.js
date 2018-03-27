var latitude = 0;
var longitude = 0;


$(document).ready(function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, function(json){
                
                $("#name").html(json.name);
                
                $("#temp-celsius").html(json.main.temp);
                $("#temp-fahrenheit").html((parseFloat(json.main.temp) * 1.8 + 32).toFixed(2));
                
                $("#description").html(json.weather[0].main);
                
                
                
                
            }); 
        });


    }
});

function setBackground(desc){
    desc.toLowerCase();
    
    
    
}
