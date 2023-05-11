let TextDescription = document.getElementById("TextDescription");
let boxes = [document.getElementById("nan1"), document.getElementById("nan3"), document.getElementById("B"), document.getElementById("T"), document.getElementById("nan2")];
let TextToFlexes = document.getElementsByClassName("weee");
let card = document.getElementsByClassName("card")[0];

var flexOfset = 182;

let boxesDestenation = [-110, -210, 0, -60, -240];
let boxesStartNoice = [3, 4, 1, 2, 5];
var prefMargin_TextDes = -30;
var pref_ops = 0;

// var box = document.getElementById("BoxesSVG");
// window.addEventListener('resize', function (event) {
//     box.style.transition = 'all 1s'
//     // box.style.opacity = (window.innerWidth < 1297 ? 0 : 100) + '%';
// })

const sl = 1002;

OS[OS.length] = function () {
    {
        let ops = mapping(y_window, 0, sl, 0, 100);
        let x = mapping(y_window, 100, sl, -30, 0);
        let margin_TextDes = (x > 0 ? 0 : x);
        TextDescription.style.left = Math.max(prefMargin_TextDes, margin_TextDes) + '%';
        TextDescription.style.opacity = Math.max(pref_ops, ops) + '%';
        prefMargin_TextDes = Math.max(prefMargin_TextDes, margin_TextDes);
        pref_ops = Math.max(pref_ops, ops);
    }
    {
        for (let i = 0; i < boxesDestenation.length; i++) {
            let right = mapping(y_window, 0, sl, (200 - ((300 - boxesDestenation[i]) + boxesStartNoice[i] * 100)), boxesDestenation[i]);
            right = right <= boxesDestenation[i] ? right : boxesDestenation[i];
            boxes[i].style.right = right + 'px';
            boxes[i].style.opacity = mapping(y_window, 500, 800, 0, 100) + '%';
        }
    }
    {
        let x = 1500;
        let pos = mapping(y_window, 500, 3500, x, -x);
        TextToFlexes[0].style.left = pos * -1 - flexOfset + 'px';
        TextToFlexes[1].style.left = pos + 'px';
    }
    {
        card.style.opacity = mapping(y_window, 2900, 3240, 0, 100) + '%';
    }

};