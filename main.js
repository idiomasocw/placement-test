window.onload = function() {
    const resultsDiv = document.getElementById('results');
    const listeningTaken = sessionStorage.getItem('listeningTaken');
    const useOfEnglishTaken = sessionStorage.getItem('useOfEnglishTaken');
    const listeningScore = sessionStorage.getItem('listeningScore');
    const useOfEnglishScore = sessionStorage.getItem('useOfEnglishScore');

    if (listeningTaken === 'true' && useOfEnglishTaken === 'true') {
        resultsDiv.innerHTML = `Congratulations, you completed both tests. Your average score for the use of English test was ${useOfEnglishScore} and your average score for the listening test was ${listeningScore}. According to this score, you should enrol in the English level ... course.`;
    } else if (listeningTaken === 'true') {
        resultsDiv.innerHTML = "Now take the use of English test.";
    } else if (useOfEnglishTaken === 'true') {
        resultsDiv.innerHTML = "Now take the listening test.";
    } else {
        resultsDiv.innerHTML = "Take the use of English test, and then the listening test.";
    }
}
