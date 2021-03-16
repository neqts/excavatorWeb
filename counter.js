const counters = document.querySelectorAll('.num')
const speed = 20
var percent = 80;
var window_scrolled;


counters.forEach(counter => {
    const updateCount = () => {
        const target = counter.getAttribute('data-target');

        const count = +counter.innerText;

        const inc = target / speed;
        

        if(count<target){
                counter.innerText = count+inc;
                setTimeout(updateCount, 1)
        }else{
            count.innerText=target;
        }
    }


    

    
    $(window).scroll(function() {
        window_scrolled = ($(document).height()/100)*40;
    
        if($(window).scrollTop() + $(window).height() >= window_scrolled) {
            updateCount()
        }
    });
})



