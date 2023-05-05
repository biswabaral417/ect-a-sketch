const container = document.querySelector('.container');
const select = document.querySelector('select');


let size = 16;


let mouseDown = false;
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);
// select.addEventListener("change", () => {
//     findsize();
// });


function createdivs(i) {
    const pixels = document.createElement('div');
    pixels.setAttribute("id", `item${i}`);
    pixels.setAttribute("class", "hov");
    pixels.style.cssText = "background-color:white;";
    container.appendChild(pixels);
}


function findsize() {
    size = +(select.value);
    return size;
};


function pixxelss(){
    const pixels = document.querySelectorAll('.hov');
    pixels.forEach(element => {
        let id = element.getAttribute("id");
        element.addEventListener(`mouseover`, (e) => {
            if (mouseDown) {
                element.style.backgroundColor = "black";
            }
        });
    });
}


function containerStyles(){
    container.innerHTML = "";
    container.style.cssText =
    `display:grid; grid-template-rows:repeat(${size},1fr); grid-template-columns:repeat(${size},1fr);`;
}


function divs() {
    findsize();
    size = findsize();
    containerStyles();

    for (let i = 0; i < size ** 2; i++) {
        createdivs(i);
    }
    pixxelss();

    
}
