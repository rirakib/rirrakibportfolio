const toggle_btn = document.querySelector('.box');
const sideBar = document.querySelector('.side_bar');

toggle_btn.addEventListener('click', function () {
    sideBar.classList.toggle('sideBarActive');
    toggle_btn.classList.toggle('toggle_btn_active');
})

var typed = new Typed('.element', {
    strings: ["Frontend Designer.", "Freelancer."],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    backDelay: 700,
});


