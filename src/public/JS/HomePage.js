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

OS[OS.length] = function () {
    {
        let ops = mapping(y_window, 0, 900, 0, 100);
        let x = mapping(y_window, 100, 900, -30, 0);
        let margin_TextDes = (x > 0 ? 0 : x);
        TextDescription.style.left = Math.max(prefMargin_TextDes, margin_TextDes) + '%';
        TextDescription.style.opacity = Math.max(pref_ops, ops) + '%';
        prefMargin_TextDes = Math.max(prefMargin_TextDes, margin_TextDes);
        pref_ops = Math.max(pref_ops, ops);
    }
    {
        for (let i = 0; i < boxesDestenation.length; i++) {
            let right = mapping(y_window, 0, 900, (200 - ((300 - boxesDestenation[i]) + boxesStartNoice[i] * 100)), boxesDestenation[i]);
            right = right <= boxesDestenation[i] ? right : boxesDestenation[i];
            boxes[i].style.right = right + 'px';
            boxes[i].style.opacity = mapping(y_window, 500, 700, 0, 100) + '%';
        }
    }
    {
        let x = 1500;
        let pos = mapping(y_window, 500, 3500, x, -x);
        TextToFlexes[0].style.left = pos * -1 - flexOfset + 'px';
        TextToFlexes[1].style.left = pos + 'px';
    }
    {
        card.style.opacity = mapping(y_window, 2500, 2800, 0, 100) + '%';
    }

};


// fungtion for sending msg to api with post request
function sendMsg() {
    // get data from input in index.html
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('massage').value;

    let unvalid = 'false';
    if (msg.length === 0) unvalid = 'massage';
    if (name.length === 0) unvalid = 'name';
    if (unvalid !== 'false') {
        alert(`${unvalid} cannot be empty`);
        return;
    }

    if (!validateEmail(email)) {
        alert(`please input a valid email`);
        return;
    }

    data = {
        "name": name,
        "email": email,
        "message": msg
    }
    const options = {
        headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(data)
    };

    fetch('/send_massage', options).then(response => {
        console.log(response);
    });
}

//make expandeble textarea
var textarea = document.getElementById('massage')
textarea.scrollHeight = 100;
var heightLimit = 500;

textarea.oninput = function () {
    textarea.style.height = ""; /* Reset the height*/
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};