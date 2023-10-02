const scrollReveal = () => {
    let reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let revealTop = element.getBoundingClientRect().top;
        let revealPoint = 320;
        if(revealTop < (windowHeight - revealPoint)) element.classList.replace('reveal', 'visible'); 

    })
    handler();
}
window.onload = scrollReveal;
window.addEventListener('scroll', scrollReveal);
const handler = () => { if(document.querySelectorAll('.reveal').length <= 0) window.removeEventListener('scroll', scrollReveal); }