function submitQuiz() {

    var shortAnswerInputs = document.querySelectorAll('input[type="number"]');
    var emptyShortAnswer = false;

    shortAnswerInputs.forEach(function(input) {
        if (input.value.trim() === '') {
            input.classList.add('unanswered'); // Add class to unanswered short answer inputs
            emptyShortAnswer = true;
        } else {
            input.classList.remove('unanswered'); // Remove class if previously marked unanswered
        }
    });


    if (emptyShortAnswer) {
        alert("Please answer all questions!");
        return false;
    } else {
        var isConfirmed = confirm("Are you sure you want to submit the quiz?");
        if (isConfirmed) {
            calculateAndShowScore();
            document.getElementById("redoButton").style.display = "inline";
        }
        return false;
    }

}


function calculateAndShowScore() {
    var score = 0; 
    score = calculateScore();
    alert("Your score is: " + score + "/" + getTotalQuestions());
}

function calculateScore() {
     score = checkQuestion('q1', 81, 'q1-result') + 
     checkQuestion('q2', -81, 'q2-result') + checkQuestion('q3', -81, 'q3-result') +
     checkQuestion('q4', 81, 'q4-result') + checkQuestion('q5', 9, 'q5-result') + checkQuestion('q6', 1, 'q6-result') + checkQuestion('q7', 8, 'q7-result') +  checkQuestion('q8', 0, 'q8-result')
      +  checkQuestion('q9', 14580, 'q9-result');
    return score; 
}


function getTotalQuestions() {
    return document.querySelectorAll('.question').length;
}



function checkQuestion(inputName, correctAnswer, resultId) {
    const userAnswer = parseInt(document.querySelector(`input[name="${inputName}"]`).value);
    const resultSpan = document.getElementById(resultId);

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        setResultSpan(resultSpan, '✅ Correct', 'green');
        return 1; 
    } else {
        setResultSpan(resultSpan, '❌ Wrong', 'red');
        return 0; 
    }
}

function setResultSpan(resultSpan, text, color) {
    resultSpan.textContent = text;
    resultSpan.style.color = color; 
}






function submitAndResetQuiz() {
    var answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
        q6: document.getElementById('q6').value,
        q7: document.getElementById('q7').value,
        q8: document.getElementById('q8').value,
        q9: document.getElementById('q9').value
    };

    document.getElementById("quiz").submit();
    resetQuiz();
}

function resetQuiz() {
    document.getElementById("quiz").reset();
}

document.getElementById("redoButton").addEventListener("click", function() {
    submitAndResetQuiz();
});
