var latitude = 0;
var longitude = 0;


jQuery(document).ready(function ($) {
    function setBackground(weather){
        var desc = weather.toLowerCase();
        switch(desc){
            case "clouds":
                $('#body').css('background-image', 'url("img/cloudy.png")');
                break;
            case "rain":
                $('#body').css('background-image', 'url("img/rain.jpg")');
                break;
            case "snow":
                $('#body').css('background-image', 'url("img/snow.jpg")');
                break;
            case "drizzle":
                $('#body').css('background-image', 'url("img/drizzle.jpg")');
                break;
            default:
                $('#body').css('background-image', 'url("img/clouds.jpeg")');
                break;
        }

    }
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, function(json){
                
                setBackground(json.weather[0].main);
                
                $("#name").html(json.name);
                
                $("#temp-celsius").html(json.main.temp);
                $("#temp-fahrenheit").html((parseFloat(json.main.temp) * 1.8 + 32).toFixed(2));
                
                $("#description").html(json.weather[0].main);
                
                
                
                
            }); 
        });


    }
});


