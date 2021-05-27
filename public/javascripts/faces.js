(function($) {
    const cards = $('.card')
    const timer = $('.timer')
    let counter = 15

    setInterval(() => {
        if (counter === 0 ) {
            clearInterval()
            return cards.next('label').text('')
        }
        --counter
        timer.text(counter)
    },1000);
 

})(jQuery)
