(function($) {

const cards = $('.card')
const gameDuration = 1000

// ============================== controlling time of game
setTimeout(() => { hideNames(); showAnswerInputs() }, gameDuration)

function hideNames () { cards.siblings('p').text('') }

function showAnswerInputs () { cards.siblings('input').removeClass('d-none') }

// ===================================== sending answers to server
setTimeout(()=> {

    const answers = getAnswers()
    $.ajax({
        type: "post",
        url: "/faces",
        data: answers,
        success: function (response) {
            console.log("success====> ", response)
        },
        error: (err) => {
            console.log('error=======> ', err)
        }
    });
    getAnswers()

}, gameDuration+10000 )


function getAnswers () {
    let answers = {}
    $('input').each(function (index) { answers[index] = $(this).val().trim(' ') })
    return answers
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

















