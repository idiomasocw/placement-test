window.onload = function() {
    const resultsDiv = document.getElementById('results');
    const tests = ['use_of_english', 'listening'];
    let completedTests = [];
    let htmlContent = '';
    let message = '';

    tests.forEach((test) => {
        const result = localStorage.getItem(test);
        if (result) {
            const { points, listeningAverageScore, useOfEnglishAverageScore, recommendedLevel } = JSON.parse(result);
            let additionalContent = '';

            if (test === 'use_of_english') {
                additionalContent = `<p>Use of English Average Score: ${useOfEnglishAverageScore}</p>`;
            } else if (test === 'listening') {
                additionalContent = `<p>Listening Average Score: ${listeningAverageScore}</p>`;
            }

            htmlContent += `
                <div class="result">
                    <h2>${test.replace(/_/g, ' ').toUpperCase()} Results</h2>
                    <p>Points: ${points}</p>
                    ${additionalContent}
                    <p>Recommended Level: ${recommendedLevel}</p>
                </div>
            `;

            completedTests.push(test);
        }
    });

    if (completedTests.length > 0) {
        if (completedTests.length === 1 && completedTests[0] === 'use_of_english') {
            message = "<p>Please take the listening test now.</p>";
        }

        resultsDiv.innerHTML = message + htmlContent;

        // Create a button to clear the test results from local storage
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Take test again';
        clearButton.addEventListener('click', () => {
            tests.forEach((test) => {
                localStorage.removeItem(test);
            });
            resultsDiv.innerHTML = 'Test results cleared. You can now retake the test.';
        });

        // Append the button to the resultsDiv
        resultsDiv.appendChild(clearButton);
    } else {
        resultsDiv.innerHTML = 'Please take all the tests.';
    }
};
