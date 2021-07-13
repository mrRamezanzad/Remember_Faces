(function($) {

const cards = $('.card')
const nameTags = cards.siblings('p')
const answerInputs = cards.siblings('input')
// const gameStartDelay = 5000 //45000
const memorizingDuration = 5000 //120000
const answeringDuration = 5000 //120000

// ============================== prepare UI for answering, then check them with server
setTimeout(() => {
     toggleNames()
     toggleAnswerInputs()
     setTimeout(checkAnswersWithServer, answeringDuration)
}, memorizingDuration)

function toggleNames () { nameTags.toggleClass('d-none') }

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
            $(answerInputs[answerIndex]).css("border", "1px solid green")
            
        else $(answerInputs[answerIndex]).css("border", "1px solid orangered")
    }
}

// TODO: ADDING TIMER PREVIEW TO PAGE
// const timerInput = $('.timer')
// let counter = 15
// let counter = 5000000

// setInterval(() => {
//     if (counter === 0 ) {
//         clearInterval()
//         return cards.next('label').text('')
//     }
//     --counter
//     timer.text(counter)
// },1000);

// ============================== showing answer inputs
// setInterval(() => {
    //     if (counter <= 0 ) {
        //         clearInterval()
        //         cards.next('p').text('')
        //         
        //         return 
//     }
//     const decreament = Math.floor(Math.random()*90000)
//     counter-=decreament
//     timerInput.text(parseInt(timerInput.text())+decreament)
// },50);

 
})(jQuery)

















