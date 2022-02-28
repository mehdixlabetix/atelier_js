const color=document.querySelector("#color");
const taille=document.querySelector("#taille")
const font=document.querySelector("#font");
const text = document.querySelector("#text")
color.addEventListener('input',function (e){
    text.style.color=e.target.value;
})
taille.addEventListener('change', function (e) {

    text.style.fontSize = (e.target.value + "px");
})

font.addEventListener('input',function (e){
    text.style.fontFamily=e.target.value;
    console.log(e.target.value);
    console.log(text.style.font);
})
