const VEIL_STANDARD = document.querySelector('.veil-standard');

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

disableScrolling();

setTimeout(() => {
    VEIL_STANDARD.classList.add('closeVeilOut');
    // alert("cocoa");
}, 1400);

setTimeout(() => {
    enableScrolling();
}, 2400);