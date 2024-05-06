const apiKey = "a82d98030416d40eba851bfc7b856a75";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&=London";

async function checkWeater() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);


}
checkWeater();
