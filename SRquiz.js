


function submitQuiz() {
    var radioAnswers = document.querySelectorAll('input[type="radio"]:checked');
    
    var shortAnswerInputs = document.querySelectorAll('input[type="number"]');
    var selectAnswers = document.querySelectorAll('select');
    var emptyShortAnswer = false;
    var emptySelectAnswer = false;

    shortAnswerInputs.forEach(function(input) {
        if (input.value.trim() === '') {
            input.classList.add('unanswered'); // Add class to unanswered short answer inputs
            emptyShortAnswer = true;
        } else {
            input.classList.remove('unanswered'); // Remove class if previously marked unanswered
        }
    });


    var radioGroups = document.querySelectorAll('input[type="radio"][name^="q"]');
        radioGroups.forEach(function(group) {
        var checked = group.closest('.question').querySelector(':checked');
        if (!checked) {
            group.closest('.question').classList.add('unanswered');
        } else {
            group.closest('.question').classList.remove('unanswered');
        }
    });


    selectAnswers.forEach(function(select) {
        if (select.value === '') {
            select.classList.add('unanswered'); // Add class to unanswered select inputs
            emptySelectAnswer = true;
        } else {
            select.classList.remove('unanswered'); // Remove class if previously marked unanswered
        }
    });

    if (radioAnswers.length < 6 || emptyShortAnswer || emptySelectAnswer) {
        alert("Please answer all questions!");
        return false;
    } else {
        var isConfirmed = confirm("Are you sure you want to submit the quiz?");
        if (isConfirmed) {
            calculateAndShowScore();
            document.getElementById("redoButton").style.display = "inline";
            return false; 
        }
        return false;
    }
}


document.getElementById("quiz").addEventListener("submit", function(event) {
    event.preventDefault(); // This prevents the form from submitting normally
  });



function calculateAndShowScore() {
    var score = 0; 
    score = calculateScore();
    alert("Your score is: " + score + "/" + getTotalQuestions());
}


function calculateScore() {
    score = checkQuestion1() + checkQuestion2() + checkQuestion3() + checkQuestion4() + checkQuestion5() + checkQuestion6() + checkQuestion7() + checkQuestion8();
    return score; 
}


function checkQuestion1() {
    var correctAnswer = 'b'; 
    var userAnswer = document.querySelector('input[name="q1"]:checked').value;

    var resultSpan = document.getElementById('q1-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
       return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
}
}


function checkQuestion2() {
    var correctAnswer = 'b'; 
    var userAnswer = document.querySelector('input[name="q2"]:checked').value;

    var resultSpan = document.getElementById('q2-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}


function checkQuestion3() {
    var correctAnswer = 'False'; 
    var userAnswer = document.querySelector('input[name="q3"]:checked').value;

    var resultSpan = document.getElementById('q3-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}

function checkQuestion4() {
    var correctAnswer1 = 'both'; 
    var selectElement = document.querySelector('select[name="operator"]');
    var userAnswer1 = selectElement.options[selectElement.selectedIndex].value;

    var correctAnswer2 = 6; 
    var userAnswer2 = document.querySelector('input[name="q4"]').value;

    var resultSpan = document.getElementById('q4-result');

    if ((userAnswer1 === correctAnswer1) && (correctAnswer2 == userAnswer2)) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}


function checkQuestion5() {
    var correctAnswer = 'True'; 
    var userAnswer = document.querySelector('input[name="q5"]:checked').value;

    var resultSpan = document.getElementById('q5-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}


function checkQuestion6() {
    var correctAnswer = 'True'; 
    var userAnswer = document.querySelector('input[name="q6"]:checked').value;

    var resultSpan = document.getElementById('q6-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
    }
}

function checkQuestion7() {
    var correctAnswer = 'False'; 
    var userAnswer = document.querySelector('input[name="q7"]:checked').value;

    var resultSpan = document.getElementById('q7-result');

    // Update the result display based on correctness
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}


function checkQuestion8() {
    var correctAnswerUnit = 'm'; 
    var correctWidth = 4; 
    var correctLength = 8; 

    var selectElementUnit1 = document.querySelector('select[name="unit1"]');
    var userUnitAnswer1 = selectElementUnit1.options[selectElementUnit1.selectedIndex].value;

    var selectElementUnit2 = document.querySelector('select[name="unit2"]');
    var userUnitAnswer2 = selectElementUnit2.options[selectElementUnit2.selectedIndex].value;

    var userLength = parseInt(document.querySelector('input[name="q8a"]').value);
    var userWidth = parseInt(document.querySelector('input[name="q8b"]').value);

    var resultSpan = document.getElementById('q8-result');

    if (userUnitAnswer1 === correctAnswerUnit && userUnitAnswer2 === correctAnswerUnit && userLength === correctLength && userWidth === correctWidth) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}



function getTotalQuestions() {
    return document.querySelectorAll('.question').length;
}


document.getElementById("redoButton").addEventListener("click", function() {
    document.getElementById("quiz").submit();
});