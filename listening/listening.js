// Variables for stopwatch
let timer;
let timeLimit = 30 * 60; // 60 minutes in seconds
let timeElapsed = timeLimit;
let totalIncorrectAnswers = 0;
let consecutiveIncorrectAnswers = 0;
let testInProgress = true;

// Add this code at the beginning of your script.js
document.addEventListener('DOMContentLoaded', () => {
    const startTestButton = document.getElementById('start-test');
    const modal = document.getElementById('modal');
    const question = document.getElementById('question');

    startTestButton.addEventListener('click', () => {
        modal.style.display = 'none';
        question.style.display = 'block';
        startTimer();
    });

    window.addEventListener('beforeunload', (e) => {
        if (timeElapsed < timeLimit && testInProgress) {
            e.preventDefault();
            e.returnValue = "Do you really want to refresh the page? The test is still in progress and you will lose your progress. Hit the 'Cancel' button to continue doing the test, and click the 'refresh' button to refresh the page.";
        }
    });
});

//This is the start timer function
function startTimer() {
    timer = setInterval(() => {
        timeElapsed--;
        updateStopwatch();
        if (timeElapsed <= 0) {
            clearInterval(timer);
            endTest('listening');
        }
    }, 1000);
}

function updateStopwatch() {
    const stopwatch = document.getElementById('stopwatch');
    const hours = Math.floor(timeElapsed / 3600);
    const minutes = Math.floor((timeElapsed % 3600) / 60);
    const seconds = timeElapsed % 60;

    stopwatch.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}


const questionElement = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const messageElement = document.getElementById('message');

let currentLevel = 2;
let previousLevel = null;
let incorrectStreak = 0;
let questionsAnswered = [];
let points = 0;
let listeningScore = 0;
let listeningQuestionsCount = 0;


// Returns points based on the question level
function getPointsForLevel(level) {
    if (level >= 1 && level <= 4) {
        return 1;
    } else if (level >= 5 && level <= 7) {
        return 3;
    } else if (level >= 8 && level <= 10) {
        return 9;
    } else if (level >= 11 && level <= 13) {
        return 27;
    } else if (level >= 14 && level <= 16) {
        return 81;
    } else {
        return 0;
    }
}

// Gets the next question based on the current level and filters out answered questions
function getNextQuestion(level) {
    const availableQuestions = questions.filter(q => q.level === level && !questionsAnswered.includes(q));
    if (availableQuestions.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
}

// Displays the question on the screen and replaces the placeholder with an input field, includes multiple choice- listening section
let playCount = 0;
let currentAudioId = null;

function displayQuestion(question) {
    if (question.audioUrl) {
        // Check if the audio is from a different question
        if (currentAudioId !== question.id) {
            playCount = 0;
            currentAudioId = question.id;
        }

        questionElement.innerHTML = `
        <div class="audioContainer">
            <audio id="audio" controls controlsList="nodownload" playbackRate="1" disableRemotePlayback">
                <source src="${question.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
        <hr>
    `;
    
    const tempContainer = document.createElement('div');
    tempContainer.className = 'options-container'; // Add a class to the container
    
    if (question.options) {
        const listeningPromptContainer = document.createElement('div');
        listeningPromptContainer.className = 'listening-prompt'; // Add a class to the listening prompt container
    
        const listeningPromptText = document.createElement('p');
        listeningPromptText.textContent = question.text;
        listeningPromptContainer.appendChild(listeningPromptText);
    
        tempContainer.appendChild(listeningPromptContainer);
    
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'radio-buttons'; // Add a class to the radio buttons container
    
        question.options.forEach(option => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = 'option';
            optionElement.className = 'option'; // Add a class to the radio button
            optionElement.value = option;
            const optionText = document.createTextNode(option);
    
            const optionContainer = document.createElement('div');
            optionContainer.className = 'radio-option'; // Add a class to the option container
    
            optionContainer.appendChild(optionElement);
            optionContainer.appendChild(optionText);
            optionsContainer.appendChild(optionContainer);
        });
    
        tempContainer.appendChild(optionsContainer);
    }

     else {
            tempContainer.innerHTML = question.text.replace(/\*(.*?)\*/g, '<input type="text" class="blank">');
        }

        while (tempContainer.firstChild) {
            questionElement.appendChild(tempContainer.firstChild);
        }

        const audioElement = document.getElementById('audio');
        audioElement.addEventListener('play', () => {
            playCount++;
            if (playCount > 2) {
                audioElement.pause();
                audioElement.currentTime = 0;
                alert('You can only play the recording twice.');
            }
        });
    } else {
        if (question.options) {
            questionElement.innerHTML = question.text + "<br>";
            question.options.forEach(option => {
                questionElement.innerHTML += `<div class="radio-option"><input type="radio" name="option" value="${option}">${option}</div>`;
            });
            
        } else {
            questionElement.innerHTML = question.text.replace(/\*(.*?)\*/g, '<input type="text" class="blank">');
        }
    }
}



// Checks if the submitted answer matches any of the correct answers
function checkAnswer(question, answers) {
    let correctAnswers = 0;
    for (let i = 0; i < question.answer.length; i++) {
        if (question.answer[i].toLowerCase() === answers[i].toLowerCase()) {
            correctAnswers++;
        }
    }
    return correctAnswers;
}

// Updates the current level and handles the incorrect streak based on the submitted answer
function updateLevel(correct) {
    previousLevel = currentLevel;
    if (correct) {
        currentLevel = getNextAvailableLevel(currentLevel, 1);
        incorrectStreak = 0;
    } else {
        currentLevel = getNextAvailableLevel(currentLevel, -1);
        incorrectStreak++;
    }
}

// Returns the next available level based on the current level and a step value
function getNextAvailableLevel(currentLevel, step) {
    let nextLevel = currentLevel + step;
    while (getNextQuestion(nextLevel) === null && nextLevel >= 1 && nextLevel <= 15) {
        nextLevel -= Math.sign(step);
    }
    // If no question available in next or previous level, return null to signal end of test
    if (getNextQuestion(nextLevel) === null) {
        return null;
    }

    return Math.min(Math.max(nextLevel, 1), 15);
}


// Ends the test, displays the final score and hides the form
function endTest() {
    const returnButton = document.querySelector('.returnToMenu');
    returnButton.classList.remove('scaled');
    testInProgress = false;
    clearInterval(timer);
    let recommendedLevel = '';
    if (points >= 0 && points <= 5) {
        recommendedLevel = 'A1';
    } else if (points >= 6 && points <= 12) {
        recommendedLevel = 'A2';
    } else if (points >= 13 && points <= 39) {
        recommendedLevel = 'B1';
    } else if (points >= 40 && points <= 130) {
        recommendedLevel = 'B2';
    } else if (points >= 130) {
        recommendedLevel = 'C1';
    }

    let listeningAverageScore = listeningQuestionsCount ? (listeningScore / listeningQuestionsCount).toFixed(2) : 0;

    questionElement.innerHTML = `The test is over. You scored <b>${points}</b> points. Your average Listening score is <b>${listeningAverageScore}%</b>. Based on your score, we recommend you enroll in the level <b>${recommendedLevel}</b> English course. Thank you for taking the test with us!`;
    answerForm.style.display = "none";
    messageElement.style.display = "none";

    let testResult = {
        testType: 'listening',
        points: points,
        listeningAverageScore: listeningAverageScore,
        recommendedLevel: recommendedLevel
    };

    localStorage.setItem('listening', JSON.stringify(testResult));
}


// Starts the test by getting the next question and displaying it
function startTest() {
    const returnButton = document.querySelector('.returnToMenu');
    returnButton.classList.add('scaled');
    const question = getNextQuestion(currentLevel);
    if (question === null || currentLevel === null) {
        // If there are no more questions at the current level, end the test
        endTest('listening');
    } else {
        questionsAnswered.push(question);
        displayQuestion(question);
    }
}

// Submits the answer, validates it and updates the score, level, and incorrect streak
function submitAnswer() {
    const answerInputs = document.querySelectorAll('.option:checked, .blank');
    if (answerInputs.length === 0) return;
    const answers = Array.from(answerInputs).map(input => input.value.trim());
    if (answers.some(answer => !answer)) return;
    const question = questionsAnswered[questionsAnswered.length - 1];
    const correctAnswers = checkAnswer(question, answers);

    const percentageCorrect = (correctAnswers / question.answer.length) * 100;
    const correct = percentageCorrect >= 69;

    // Add points for each correct answer
    for (let i = 0; i < correctAnswers; i++) {
        points += getPointsForLevel(question.level);
    }

    // Add to Listening category score and increment question count
    listeningScore += percentageCorrect;
    listeningQuestionsCount++;

    updateLevel(correct);

    // If there are no more questions at current level and also in previous level, then end test
    if (currentLevel === null || consecutiveIncorrectAnswers === 2) {
        endTest('listening');
    } else if (totalIncorrectAnswers === 5) {
        endTest('listening');
    } else {
        startTest();
    }

    answerInputs.forEach(input => input.value = "");
}


answerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitAnswer();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitAnswer();
    }
});

startTest();