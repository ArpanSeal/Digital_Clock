// let fun = () => {
//   // let bt2 = document.getElementById("btn2");
//   // bt2.addEventListener('click', () => {
//   //   clearInterval(n);
//   // })
//   let a = new Date();
//   // console.log(a.getHours(), a.getMinutes(), a.getSeconds(), a.getDay(), a.getDate(), a.getMonth(), 1900+a.getYear(), a);
//   let b1 = document.getElementById("box1");
//   let b2 = document.getElementById("box2");
//   let b3 = document.getElementById("box3");
//   let z1 = "";
//   let hr = a.getHours();
//   if (hr >= 0 && hr <= 9) { z1 = "0"; }
//   b1.innerHTML = `<h1>${z1 + hr}</h1>`;

//   let z2 = "";
//   let min = a.getMinutes();
//   if (min >= 0 && min <= 9) { z2 = "0"; }
//   b2.innerHTML = `<h1>${z2 + min}</h1>`;

//   let z3 = "";
//   let sec = a.getSeconds();
//   if (sec >= 0 && sec <= 9) { z3 = "0"; }
//   b3.innerHTML = `<h1>${z3 + sec}</h1>`;

//   let cal1 = document.getElementsByClassName("cal1")[0];
//   let d_array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   let d = a.getDay();
//   cal1.innerHTML = d_array[d];

//   let cal2 = document.getElementsByClassName("cal2")[0];
//   let c = "0";
//   if (a.getMonth() == 10 || a.getMonth() == 11) { c = ""; }
//   cal2.innerHTML = `${a.getDate()}/${c + (a.getMonth() + 1)}/${a.getYear() + 1900}`;
// }

// let n = setInterval(fun, 1000);

// // let bt1 = document.getElementById("btn1");
// // bt1.addEventListener('click', () => {
// //   n = setInterval(fun, 1000);
// // })

const openCageApiKey = "942bc8c6e7174ce38f462e049f1cb1b3";
const openWeatherMapApiKey = "0c5eeaf4cd18e1d9dcff92482b3c38ac";
let latitude = 22.5697;
let longitude = 88.3697;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageApiKey}&language=en&pretty=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const city = data.results[0].components.city;

          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`
          )
            .then((response) => response.json())
            .then((data) => {
              const temperature = data.main.temp;
              const description = data.weather[0].description;
              const tempElement = document.getElementById("temp");
              const descElement = document.getElementById("desc");
              tempElement.innerHTML = `${temperature}&deg;C`;
              if (description == "clear sky")
                descElement.innerHTML = `<i class="fa-solid fa-sun"></i>`;
              else if (
                description.includes("drizzle") ||
                description.includes("rain")
              )
                descElement.innerHTML = `<i class="fa-sharp fa-solid fa-cloud-rain"></i>`;
              else descElement.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    },
    function (error) {
      console.error("Error getting user location:", error);
      const city = "Kolkata";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const tempElement = document.getElementById("temp");
          const descElement = document.getElementById("desc");
          tempElement.innerHTML = `${temperature}&deg;C`;
          if (description == "clear sky")
            descElement.innerHTML = `<i class="fa-solid fa-sun"></i>`;
          else if (
            description.includes("drizzle") ||
            description.includes("rain")
          )
            descElement.innerHTML = `<i class="fa-sharp fa-solid fa-cloud-rain"></i>`;
          else descElement.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        })
        .catch((error) => console.error(error));
    }
  );
} else {
  console.error("Geolocation is not supported in this browser.");
}

let fun = () => {
  let a = new Date();
  let b1 = document.getElementById("box1");
  let b2 = document.getElementById("box2");
  let b3 = document.getElementById("box3");
  let z1 = "";
  let hr = a.getHours();
  if (hr >= 0 && hr <= 9) {
    z1 = "0";
  }
  b1.innerHTML = `<h1>${z1 + hr}</h1>`;

  let z2 = "";
  let min = a.getMinutes();
  if (min >= 0 && min <= 9) {
    z2 = "0";
  }
  b2.innerHTML = `<h1>${z2 + min}</h1>`;

  let z3 = "";
  let sec = a.getSeconds();
  if (sec >= 0 && sec <= 9) {
    z3 = "0";
  }
  b3.innerHTML = `<h1>${z3 + sec}</h1>`;

  let cal1 = document.getElementsByClassName("cal1")[0];
  let d_array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = a.getDay();
  cal1.innerHTML = d_array[d];

  let cal2 = document.getElementsByClassName("cal2")[0];
  let c = "0";
  if (a.getMonth() == 10 || a.getMonth() == 11) {
    c = "";
  }
  cal2.innerHTML = `${a.getDate()}/${c + (a.getMonth() + 1)}/${
    a.getYear() + 1900
  }`;

  // var latitude = position.coords.latitude;
  // var longitude = position.coords.longitude;
  console.log(latitude, longitude);

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageApiKey}&language=en&pretty=1`
  )
    .then((response) => response.json())
    .then((data) => {
      const city = data.results[0].components.city;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const tempElement = document.getElementById("temp");
          const descElement = document.getElementById("desc");
          tempElement.innerHTML = `${temperature}&deg;C`;
          if (description == "clear sky")
            descElement.innerHTML = `<i class="fa-solid fa-sun"></i>`;
          else if (
            description.includes("drizzle") ||
            description.includes("rain")
          )
            descElement.innerHTML = `<i class="fa-sharp fa-solid fa-cloud-rain"></i>`;
          else descElement.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
};
fun();
setInterval(fun, 1000); // Update the clock every second.
