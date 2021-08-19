let nav = document.getElementsByTagName("nav")[0];
let TextDescription = document.getElementById("TextDescription");
let boxes = [document.getElementById("nan1"), document.getElementById("nan3"), document.getElementById("B"), document.getElementById("T"), document.getElementById("nan2")];
let TextToFlexes = document.getElementsByClassName("weee");
let card = document.getElementsByClassName("card")[0];

let boxesDestenation = [130, 30, 240, 180, 0];
let boxesStartNoice = [3, 4, 1, 2, 5];
var y;
var prefMargin_TextDes = 0;
var pref_ops = 0;

var debug = false;
function turnOnDebug() {
    debug = true;
}
function turnOffDebug() {
    debug = false;
}

function mapping(variable, inputMinimum, inputMaximum, outputMinimum, outputMaximum) {
    return (variable - inputMinimum) * (outputMaximum - outputMinimum) / (inputMaximum - inputMinimum) + outputMinimum;
}



window.addEventListener("scroll", function () {
    y = window.scrollY;
    if (debug) console.log(y);
    if (y >= 500) {
        nav.style.transition = 0.1 + 's';
        nav.style.opacity = mapping(y, 500, 800, 0, 100) + '%';
        nav.style.pointerEvents = 'auto';
    } else {
        nav.style.opacity = 0
        nav.style.pointerEvents = 'none';
    };
    {
        let ops = mapping(y, 0, 900, 0, 100);
        let x = mapping(y, 100, 900, -10, 15);
        let margin_TextDes = (x > 15 ? 15 : x);
        TextDescription.style.marginLeft = Math.max(prefMargin_TextDes, margin_TextDes) + '%';
        TextDescription.style.opacity = Math.max(pref_ops, ops) + '%';
        prefMargin_TextDes = Math.max(prefMargin_TextDes, margin_TextDes);
        pref_ops = Math.max(pref_ops, ops);
    }
    {
        for (let i = 0; i < boxesDestenation.length; i++) {
            let right = mapping(y, 0, 900, (200 - ((300 - boxesDestenation[i]) + boxesStartNoice[i] * 100)), boxesDestenation[i]);
            right = right <= boxesDestenation[i] ? right : boxesDestenation[i];
            boxes[i].style.right = right + 'px';
            boxes[i].style.opacity = mapping(y, 500, 700, 0, 100) + '%';
        }
    }
    {
        let x = 1500;
        let pos = mapping(y, 500, 3500, x, -x);
        TextToFlexes[0].style.right = pos + 'px';
        TextToFlexes[1].style.left = pos + 'px';
    }
    {
        card.style.opacity = mapping(y, 2400, 2800, 0, 100) + '%';
    }

});
