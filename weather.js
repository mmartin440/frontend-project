const $userForm = $('#user-input')
let $input = $('input[name="search-loc"]'); 


$userForm.submit((event) => {
    event.preventDefault(); 
    let userInput = $input.val(); 
    // console.log('person input', userInput); 
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=36f84690fef5fc4e4c18f3b2fec7ebbb&units=imperial`

     
    $.get(URL, (data) => {
        console.log(data);
     
        // location name
        const $location = $('<p></p>'); 
        $location.attr('class', 'loc'); 
        let locName = data['name'];  
        $location.text(locName); 
        $('.location').append($location); 
        // console.log(locName);
        

        // temperrature 
        const $temparture = $('<h1></h1>'); 
        $temparture.attr('class', 'temp-txt'); 
        let temp = data['main']['temp']; 
        // let fahren = Math.floor(((1.8 * (temp - 273)) + 32)); 
        $temparture.text(`${temp} °F`); 
     
        $('.temp').append($temparture); 
        // console.log(temp);

        // temp discription 
        const $descrip = $('<p></p>'); 
        $descrip.attr('class', 'descript-txt'); 
        let description = data.weather[0].description; 
        console.log(description); 
        $descrip.text(description); 
        $('.description').append($descrip); 

        // humidity 
        const $hum = $('<p></p>');
        let humidity = data.main.humidity; 
        $hum.attr('class', 'hum-txt'); 
        $hum.text(`HUMIDITY ${humidity}%`); 
        $('.humudity').append($hum); 

        //wind speed 
        const $wind = $('<p></p>'); 
        let windSpeed = data.wind.speed; 
        $wind.text(`WIND SPEED ${windSpeed} MPH`); 
        $('.wind-speed').append($wind); 

        $(this).remove(); 
        $('.container').append(this); 



      }); 
})



$('.refresh-btn').on('click', () =>{ 
    // $(' #weather-container').load(" #weather-container"); 
    location.reload(true); 
})
