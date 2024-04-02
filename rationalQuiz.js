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
     score = checkQuestion1() + checkQuestion2() + checkQuestion3() + checkQuestion4() + checkQuestion5() + checkQuestion6() + checkQuestion7() + checkQuestion8();
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

// create a array comparing function
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}
