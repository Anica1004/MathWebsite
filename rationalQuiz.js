function submitQuiz() {
    var radioAnswers = document.querySelectorAll('input[type="radio"]:checked');
    var checkboxAnswers = document.querySelectorAll('input[type="checkbox"]:checked');
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

    var radioGroups = document.querySelectorAll('input[type="radio"][name^="q"]');
        radioGroups.forEach(function(group) {
        var checked = group.closest('.question').querySelector(':checked');
        if (!checked) {
            group.closest('.question').classList.add('unanswered');
        } else {
            group.closest('.question').classList.remove('unanswered');
        }
    });

    var checkboxGroups = document.querySelectorAll('input[type="checkbox"][name^="q"]');
    checkboxGroups.forEach(function(group) {
    checked = group.closest('.question').querySelector(':checked');
    if (!checked) {
        group.closest('.question').classList.add('unanswered');
    } else {
        group.closest('.question').classList.remove('unanswered');
    }
});


    if (radioAnswers.length != 3 || emptyShortAnswer || checkboxAnswers.length < 1) {
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
    //  score = checkQuestion1() + checkQuestion2() + checkQuestion3() + checkQuestion4() + checkQuestion5() + checkQuestion6() + checkQuestion7() + checkQuestion8();
    score = checkQuestion1(); 
    return score; 
}



function getTotalQuestions() {
    return document.querySelectorAll('.question').length;
}


function checkQuestion1() {
    var correctAnswers = ['1', '0.75', '3/4']; 
    var userSelectedValues = []; 
    
    // Get all checked checkboxes for question 1
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="q1"]:checked');

    checkboxes.forEach(function(checkbox) {
        userSelectedValues.push(checkbox.value);
    });
    
    // Get the result span element
    var resultSpan = document.getElementById('q1-result');
    
    // Check if the user-selected values match the correct answers
    if (arraysAreEqual(userSelectedValues, correctAnswers)) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green';
        return 1; // Return 1 for correct answer
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red';
        return 0; // Return 0 for wrong answer
    }
}


function checkQuestion2() {
    var correctAnswer = 'a'; 
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
    var correctAnswer = 'd'; 
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

// this one is a input one (number) could be decimal or fraction tho..
function checkQuestion4() {
    var correctAnswer = 21/16; 
    var userAnswer = document.querySelector('input[name="q4"]').value;
    var resultSpan = document.getElementById('q4-result');

    // Update the result display based on correctness
    if (userAnswer == correctAnswer) {
        resultSpan.textContent = '✅ Correct';
        resultSpan.style.color = 'green'; 
        return 1; 
    } else {
        resultSpan.textContent = '❌ Wrong';
        resultSpan.style.color = 'red'; 
        return 0; 
    }
}






// create a array comparing function
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}













function submitAndResetQuiz() {
    var answers = {
        q1: getCheckedCheckboxValues('q1'),
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
        q6: document.getElementById('q6').value,
        q7: document.getElementById('q7').value,
        q8: document.getElementById('q8').value,
        q9: document.getElementById('q9').value,
        q10: document.getElementById('q10').value,
        q11: document.querySelector('input[name="q11"]:checked').value
    };

    
    document.getElementById("quiz").submit();
    resetQuiz();

    // Use 'answers' object to do something with the submitted answers if you make a backend later
}

function resetQuiz() {
    document.getElementById("quiz").reset();
}

document.getElementById("redoButton").addEventListener("click", function() {
    submitAndResetQuiz();
});