function evaluateScore(score) {

    // Check if score is empty or not a number
    if (score === null || score.trim() === "" || isNaN(score)) {
        return "Invalid score";
    }

    // Convert score to number
    score = Number(score);

    // Check for zero, negative number, or score above 100
    if (score <= 0 || score > 100) {
        return "Invalid score";
    }

    // Conditional 
    if (score >= 90) {
        return "Excellent";
    } 
    else if (score >= 75) {
        return "Passed";
    } 
    else {
        return "Failed";
    }
}


// Alert() Welcome message
alert("Welcome to the Student Score Evaluation Program!");


// Prompt() Ask for name
let name = prompt("Please enter your name:");


// Confirm() Validate name
if (name === null || name.trim() === "") {

    document.getElementById("result").innerHTML =
        "Invalid input: No name was entered.";

} 
else {

    // Ask for score
    let score = prompt("Please enter your score:");

    // Confirm if user wants to continue
    let proceed = confirm(
        "Hello " + name + "! Do you want to continue?"
    );

    if (proceed) {

        // Evaluate score using the function
        let remark = evaluateScore(score);

        // Display result
        document.getElementById("result").innerHTML =
            "Name: " + name + "<br>" +
            "Score: " + score + "<br>" +
            "Remark: " + remark;

    } 
    else {

        // If user clicks Cancel
        document.getElementById("result").innerHTML =
            "Evaluation cancelled. Thank you, " + name + "!";
    }
}
