/*
    ***project requerment 
    ***Change the background click by button random color genaretor
*/

// step : 1 onloeader
window.onload = () => {
    main();
}
// create main function
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    btn.addEventListener('click', function () {
        const bgColor = rgbBackgroundColor();
        root.style.background = bgColor;
        output.value = bgColor;
    })
}

// step : 2 create rgb color genaretor
function rgbBackgroundColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}