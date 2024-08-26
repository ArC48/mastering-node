const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const weatherPic = document.querySelector("#weather-pic");

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// messageOne.textContent = "dsa";
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    messageOne.textContent = `Loading...`;
    messageTwo.textContent = "";
    weatherPic.src = "";

    fetch(`http://localhost:3000/weather?address=${searchElement.value}`).then(
        (response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error;
                } else {
                    weatherPic.src = data.forecast.weather_icons[0];
                    messageOne.textContent = `It's ${
                        data.forecast.weather_descriptions[0]
                    } in ${capitalize(data.location)}`;
                    messageTwo.textContent = `${data.forecast.temperature}°C`;
                }
            });
        }
    );
});
