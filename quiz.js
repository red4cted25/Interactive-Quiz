const questions = [
    "The Earth is the only planet in our solar system that has a moon.", 
    "All living organisms are composed of cells.", 
    "Oxygen is the most abundant element in Earth's crust.", 
    "The process of photosynthesis occurs only in plants.", 
    "The human body has four heart chambers.", 
    "Water expands when it freezes.", 
    "The speed of light is faster than the speed of sound.", 
    "DNA is an abbreviation for 'Deoxyribonucleic Acid.'", 
    "The Earth's core is primarily composed of iron and nickel.", 
    "Antibiotics are effective against viral infections."
]
const answers = [
    "false",
    "true",
    "false",
    "false",
    "false",
    "true",
    "true",
    "true",
    "true",
    "false",
]
var score = 0
alert("Welcome to an interactive science quiz! Press OK to continue")
alert("Type 'true' or 'false' when answering each question")
for (let i = 0; i < answers.length; i++) {
    let answer = prompt(questions[i])
    if(answer.length == 0){
        alert("Your Answer is required. Please enter either 'true' or 'false'")
        i--
        continue
    }else if(answer.toLowerCase() == answers[i]){
        score += 1
        alert("Amazing job! You got it!")
    }else{ alert("Nice try, but that's wrong. Better luck next time!") }
}
alert("Your score is " + score + "/10. Excellent!")
