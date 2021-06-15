(function($) {
    const cards = $('.card')
    const timer = $('.timer')
    // let counter = 15
    let counter = 5000000

    // setInterval(() => {
    //     if (counter === 0 ) {
    //         clearInterval()
    //         return cards.next('label').text('')
    //     }
    //     --counter
    //     timer.text(counter)
    // },1000);

    setInterval(() => {
        if (counter <= 0 ) {
            clearInterval()
            cards.next('p').text('')
            cards.siblings('input').removeClass('d-none')
            return 
        }
        const decreament = Math.floor(Math.random()*90000)
        counter-=decreament
        timer.text(parseInt(timer.text())+decreament)
    },50);

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

    },2000 )


    function getAnswers () {
        let answers = {}
        $('input').each(function (index) {answers[index] = $(this).val()})
        return answers
    }
 
})(jQuery)
