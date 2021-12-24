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
    function getTranslateValues(element) {
        const style = window.getComputedStyle(element)
        const matrix = style['transform'] || style.webkitTransform || style.mozTransform

        // No transform property. Simply return 0 values.
        if (matrix === 'none' || typeof matrix === 'undefined') {
            return {
                x: 0,
                y: 0,
                z: 0
            }
        }

        // Can either be 2d or 3d transform
        const matrixType = matrix.includes('3d') ? '3d' : '2d'
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

        // 2d matrices have 6 values
        // Last 2 values are X and Y.
        // 2d matrices does not have Z value.
        if (matrixType === '2d') {
            return {
                x: matrixValues[4],
                y: matrixValues[5],
                z: 0
            }
        }

        // 3d matrices have 16 values
        // The 13th, 14th, and 15th values are X, Y, and Z
        if (matrixType === '3d') {
            return {
                x: matrixValues[12],
                y: matrixValues[13],
                z: matrixValues[14]
            }
        }
    }
    var nav = document.getElementsByTagName("nav")[0];
}



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
