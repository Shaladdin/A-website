//global fungtion
{
    var debug = false;

    function Don() {
        debug = true;
    }
    function Doff() {
        debug = false;
    }
    function DebugPrint(massage) {
        if (debug) { console.log(massage); }
    }
    function mapping(variable, inputMinimum, inputMaximum, outputMinimum, outputMaximum) {
        return (variable - inputMinimum) * (outputMaximum - outputMinimum) / (inputMaximum - inputMinimum) + outputMinimum;
    }
    var nav = document.getElementsByTagName("nav")[0];

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function goto(y) {
        scroll.scrollTo(0, y, 800, option);
    }
}

/*
https://github.com/idiotWu/smooth-scrollbar
*/
OS[OS.length] = function () {
    DebugPrint(y_window);
    nav.style.top = y_window + 'px'
    if (y_window >= 500) {
        let i = mapping(y_window, 500, 800, 0, 100);
        nav.style.opacity = (i > 100 ? 100 : i) + '%';
        nav.style.pointerEvents = 'auto';
    } else {
        nav.style.opacity = 0;
        nav.style.pointerEvents = 'none';
    };
}
