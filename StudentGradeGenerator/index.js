function calculateGrade() {
    const marksInput = document.getElementById("marks");
    const gradeOutput = document.getElementById("grade");

    // Get the input value and convert it to a number
    const marks = Number(marksInput.value);

    // Check the marks range and assign the grade
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 49 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    gradeOutput.textContent = "Grade: " + grade;
}