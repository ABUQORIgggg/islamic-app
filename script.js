// Selecting HTML elements
let body = document.querySelector('body');
let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button');
let p = document.querySelectorAll('p');
let card = document.querySelectorAll('.card');
let country = document.querySelector('#country');
let city = document.querySelector("#city");

// Default values for country and city
country.innerHTML = 'Uzbekistan';
city.innerHTML = 'Tashkent';

// Function to fetch and display prayer timings
function fetchPrayerTimings() {
    // Get current time
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let time = `${hours}:${minute}`;

    // Fetch prayer timings from the Aladhan API
    fetch(`http://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city.innerHTML)}&country=${encodeURIComponent(country.innerHTML)}&method=8`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data);
            p[0].innerHTML = data.data.timings.Fajr;
            p[1].innerHTML = data.data.timings.Sunrise;
            p[2].innerHTML = data.data.timings.Dhuhr;
            p[3].innerHTML = data.data.timings.Asr;
            p[4].innerHTML = data.data.timings.Maghrib;
            p[5].innerHTML = data.data.timings.Isha;

            if (data.data.timings.Fajr < time && time < data.data.timings.Sunrise) {
                p[0].style.color = "red";
            } else {
                card[0].style.color = "#fff";
            }

            if (data.data.timings.Sunrise < time && time < data.data.timings.Dhuhr) {
                card[1].style.color = "red";
            } else {
                card[1].style.color = "#fff";
            }

            if (data.data.timings.Dhuhr < time && time < data.data.timings.Asr) {
                card[2].style.color = "red";
            } else {
                card[2].style.color = "#fff";
            }


            if (data.data.timings.Asr < time && time < data.data.timings.Maghrib) {
                card[3].style.color = "red";
            } else {
                card[3].style.color = "#fff";
            }


            if (data.data.timings.Maghrib < time && time < data.data.timings.Isha) {
                card[4].style.color = "red";
            } else {
                card[4].style.color = "#fff";
            }


            if (data.data.timings.Isha < time) {
                card[5].style.color = "red";
            } else {
                card[5].style.color = "#fff";
            }
        });
}

// Initial fetch and display
fetchPrayerTimings();

function bg() {
    const unsplashAccessKey = 'b0v6HpzW8tWDb3-7nGc-KU6vWzknsSXySka7Ps89_6c';
    let url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city.innerHTML)}&category=city&content_filter=high`;

    fetch(url, {
        headers: {
            Authorization: `Client-ID ${unsplashAccessKey}`,
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let random = Math.floor(Math.random() * data.results.length);
            let randomImageUrl = data.results[random].urls.full;

            body.style.height = "100vh"
            body.style.overflow = "hidden"
            body.style.backgroundImage = `url(${randomImageUrl})`;
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center"
            console.log(body.style.backgroundImage);
        });
}


bg()
// Event listener for button click
btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Update country and city based on user input
    country.innerHTML = inputs[0].value;
    city.innerHTML = inputs[1].value;

    // Display updated country and city
    console.log("country: " + country);
    console.log("city: " + city);

    bg();
    // Fetch and display updated prayer timings
    fetchPrayerTimings();
});
