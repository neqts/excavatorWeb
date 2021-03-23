const counters = document.querySelectorAll('.num')
const numb1 = document.querySelector('.numb1')
const numb2 = document.querySelector('.numb2')
const speed = 20
var percent = 80;
var window_scrolled;



if ( $(window).width() > 1500) {
    
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



    }
    else {
    numb1.innerHTML = '5'
    numb2.innerHTML='500'
    }







