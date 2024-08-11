document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const colorDisplay = document.getElementById("colorDisplay");
    const toggleFormatBtn = document.getElementById("toggleFormat");
    let isHex = true;

    function updateDisplay(color) {
        colorDisplay.textContent = isHex ? color.toUpperCase() : hexToRgb(color);
        colorDisplay.style.color = color;
        document.body.style.backgroundColor = color;
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    colorPicker.addEventListener("input", function() {
        updateDisplay(colorPicker.value);
    });

    toggleFormatBtn.addEventListener("click", function() {
        isHex = !isHex;
        toggleFormatBtn.textContent = isHex ? "Switch to RGB" : "Switch to HEX";
        updateDisplay(colorPicker.value);
    });

    // Initialize with the default color
    updateDisplay(colorPicker.value);
});
