var y_window;

const option = {
    damping: 0.08,
    thumbMinSize: 5
}

const scroll = Scrollbar.init(document.querySelector('.smooth'), option)

var OS = [];
scroll.addListener(function (status) {
    const g = { x, y, z } = getTranslateValues(document.querySelector('.scroll-content'))
    y_window = -g.y;

    for (let i = 0; i < OS.length; i++)
        OS[i]();

})