const weatherContainer = document.getElementById("weatherContainer");

async function loadWeather() {
  try {

    const city = "Ciudad Juarez";

    const response = await fetch(
      `https://wttr.in/${city}?format=j1`
    );

    const data = await response.json();

    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;

    weatherContainer.innerHTML = `
      <div class="weatherCard">
        <h3>${city}</h3>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${desc}</p>
      </div>
    `;

  } catch (error) {
    console.error("Error loading weather:", error);
    weatherContainer.innerHTML = "<p>Error loading weather</p>";
  }
}

loadWeather();