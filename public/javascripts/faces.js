(function($) {
    
const cards = $('.card')
const answerInputs = cards.siblings('input')
// const gameStartDelay = 5000 
const memorizingDuration = 30 //seconds
const answeringDuration = 40 //seconds

// ============================== prepare UI for answering, then check them with server
startTimer(memorizingDuration)
setTimeout(() => {
    
    
    $('#timer-alarm').html('Remaning time to answer <span class="timer text-danger">-</span> seconds ')
    toggleNames()
    toggleAnswerInputs()
    startTimer(answeringDuration)
    setTimeout(checkAnswersWithServer, answeringDuration*1000)
}, memorizingDuration*1000+2000) // adding two more seconds to fix time jumping bug

function toggleNames () { const nameTags = cards.siblings('p'); nameTags.toggleClass('d-none') }

function toggleAnswerInputs () { answerInputs.toggleClass('d-none') }

function checkAnswersWithServer () {
        const answers = getAnswers()
        $.ajax({
            type: "post",
            url: "/faces",
            data: answers,
            success: function (response) {
                console.log("success====> ", response)
                showGameResults(response.results)
            },
            error: (err) => {
                alert('error=======> ', err)
            }
        });
}

function getAnswers () {
    let answers = {}
    $('input').each(function (index) { answers[index] = $(this).val().trim(' ') })
    return answers
}

function showGameResults (results) {

    toggleNames()
    answerInputs.attr('disabled', "true")

    let answerIndex = 0;
    let resultsLength = results.length
    for (; answerIndex < resultsLength; answerIndex++) {
        if (results[answerIndex])
            $(answerInputs[answerIndex]).css({"border": "1px solid green", "border-radius": "5px", "text-align": "center"})
            
        else $(answerInputs[answerIndex]).css({"border": "1px solid orangered", "border-radius": "5px", "text-align": "center"})
    }
}

// ============================= Timer =========================
// Showing timer so user knows how much time has to memorize and answer 

function startTimer (showingTime) {

    const timerInput = $('.timer')
    let timerInterval = setInterval(() => {

        timerInput.text(showingTime)
        showingTime--
        if (showingTime < 0) clearInterval(timerInterval)
        
    }, 1000)
}

})(jQuery)