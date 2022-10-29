let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rockett');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left = value * 1 + 'px';
    rocket.style.top = value * -1 + 'px';
    rocket.style.left = value * -1 + 'px';
    text.style.marginBottom= value * 1 + 'px';
    button.style.marginBottom= value * 1 + 'px';
});