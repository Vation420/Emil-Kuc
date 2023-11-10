

//zmiana koloru nav
document.addEventListener('scroll', () => {
    const li1 = document.querySelector('#li1');
    const li2 = document.querySelector('#li2');
    const li3 = document.querySelector('#li3');
    const li4 = document.querySelector('#li4');

    if(window.scrollY < 500)
    {
        li1.classList.add('scrolled');
    }else
    {
        li1.classList.remove('scrolled');
    }

    if(window.scrollY > 400 && window.scrollY < 1000)
    {
        li2.classList.add('scrolled');
    }else
    {
        li2.classList.remove('scrolled');
    }

    if(window.scrollY > 900 && window.scrollY < 2600)
    {
        li3.classList.add('scrolled');
    }else
    {
        li3.classList.remove('scrolled');
    }

    if(window.scrollY > 2500)
    {
        li4.classList.add('scrolled');
    }else
    {
        li4.classList.remove('scrolled');
    }
});



//Animacja przy scrollowaniu (library)
const sr = ScrollReveal
({
    distance: '100px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('.text1',{delay:200, origin:'left'});
sr.reveal('.img1',{delay:450, origin:'right'});

sr.reveal('#img2',{delay:100, origin:'left'});
sr.reveal('.text21 h3',{delay:400, origin:'right'});
sr.reveal('.text21 p',{delay:500, origin:'right'});

sr.reveal('#p_left',{delay:200, origin:'left'});
sr.reveal('#p_right',{delay:200, origin:'right'});



