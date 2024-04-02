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








function getTotalQuestions() {
    return document.querySelectorAll('.question').length;
}

