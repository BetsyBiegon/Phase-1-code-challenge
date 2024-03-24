function calculateDemeritPoints() {
    const speedInput = document.getElementById("speed");
    const pointsOutput = document.getElementById("points");

    // Get the input value and convert it to a number
    const speed = Number(speedInput.value);

    // Calculate the demerit points
    let demeritPoints = 0;
    if (speed >= 70) {
        demeritPoints = Math.floor((speed - 70) / 5);
    }

    // Output the demerit points
    pointsOutput.textContent = "Points: " + demeritPoints;

    // Check if license is suspended
    if (demeritPoints > 12) {
        pointsOutput.textContent += " (License suspended)";
    }
}