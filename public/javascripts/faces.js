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
            return cards.next('label').text('')
        }
        const decreament = Math.floor(Math.random()*90000)
        counter-=decreament
        timer.text(parseInt(timer.text())+decreament)
    },50);
 

})(jQuery)
