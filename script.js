document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const colorDisplay = document.getElementById("colorDisplay");

    colorPicker.addEventListener("input", function() {
        const color = colorPicker.value.toUpperCase();
        colorDisplay.textContent = color;
        colorDisplay.style.color = color;
    });
});
