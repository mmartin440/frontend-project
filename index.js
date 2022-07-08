const $userForm = $("#user-input")
let $input = $('input[name="search-loc"]')

$userForm.submit((event) => {
  event.preventDefault()
  $(".result").empty()
  let userInput = $input.val()

  // console.log('person input', userInput);
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=36f84690fef5fc4e4c18f3b2fec7ebbb&units=imperial`

  $.get(URL, (data) => {
    console.log(data)

    // location name
    const $location = $("<p></p>")
    $location.attr("class", "loc")
    let locName = data["name"]
    $location.text(locName)
    $(".location").append($location)
    // console.log(locName);

    // adding icon
    const $icon = $("<img>")
    let iconLoc = data.weather[0].icon
    let imgIcon = `http://openweathermap.org/img/wn/${iconLoc}@2x.png`
    $icon.attr("src", imgIcon)
    $(".icon-img").append($icon)

    // temperrature
    const $temparture = $("<h1></h1>")
    $temparture.attr("class", "fw-bold ")
    let temp = data["main"]["temp"]
    // let fahren = Math.floor(((1.8 * (temp - 273)) + 32));
    $temparture.text(`${temp} °F`)
    $(".temp").append($temparture)
    // console.log(temp);

    // temp discription
    const $descrip = $("<p></p>")
    $descrip.attr("class", "text-capitalize fw-semibold")
    let description = data.weather[0].description
    console.log(description)
    $descrip.text(description)
    $(".description").append($descrip)

    // humidity
    const $hum = $("<p></p>")
    const $wordHum = $("<span></span>")
    let humidity = data.main.humidity
    $hum.attr("class", "fw-bold")
    $wordHum.attr("class", "font-monospace")
    $hum.text(`${humidity}%`)
    $wordHum.text("Humidity")
    $(".humudity").append($hum, $wordHum)

    //wind speed
    const $wind = $("<p></p>")
    const $wordWind = $("<span></span>")
    let windSpeed = data.wind.speed
    $wind.attr("class", "fw-bold")
    $wordWind.attr("class", "font-monospace")
    $wind.text(`${windSpeed} MPH`)
    $wordWind.text(`Wind Speed`)
    $(".wind-speed").append($wind, $wordWind)

    if (isDayTime(iconLoc)) {
      console.log("day")
      $(".day-night").text(`It's still day time in ${locName} `)
    } else {
      console.log("night")
      $(".day-night").text(`Its night time in ${locName}!`)
    }
  })
})

const isDayTime = (icon) => {
  if (icon.includes("d")) {
    return true
  } else {
    return false
  }
}

$(".backgr").on("click", () => {
  location.reload(true)
})

$(".about").on("click", () => {
  location.replace(
    "https://vlab.noaa.gov/web/nws-heritage/-/the-national-weather-service-at-150-a-brief-history"
  )
})

function revealContent() {
  if($('.day-night').hasClass('reveal')) {
    $('.day-night').removeClass('reveal')
  } else {
    $('.day-night').addClass('reveal')
  }
}

$('.location').on('click', revealContent); 