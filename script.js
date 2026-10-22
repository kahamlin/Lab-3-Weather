const tempInput = document.querySelector("#temperature");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function() {
    const temp = temperatureInput.value;

    if (temp === "" || !Number.isFinite(Number(temp))) {
        result.textContent = "Please enter a valid temperature.";
    } 
    else if (Number(temp) < -100 || Number(temp) > 150) {
        result.textContent = "Please enter an accurate temperature.";
    }
    else if (Number(temp) < 50) {
        result.textContent = "Wear a coat or heavy jacket. It is cold outside.";
    } 
    else if (Number(temp) <= 69) {
        result.textContent = "Wear a light jacket or sweater.";
    } 
    else if (Number(temp) <= 84) {
        result.textContent = "Wear a T-shirt or light clothing.";
    } 
    else {
        result.textContent = "Wear lightweight clothing and remember to stay hydrated!";
    }
});