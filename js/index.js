function changecolor(colorNum){
    var Background=document.getElementById("main");

    Background.style.background=colorNum;
}

function inputcolor() {
    var inp = document.getElementById("inputcolor");

    changecolor(inp.value);
}