const button=document.querySelector("#bt");
const taches= document.querySelector("#tache")

function add() {
    const name = document.querySelector("#name").value;
    const content = document.querySelector("#content").value;
    taches.innerHTML += "<div style='background-color:#716f71'>"+name+ ":" +content+"    " + "<button style='background-color: #716f71' type='button' class='btn btn-light'>"+"<span class='bi bi-trash trash' ></span></button>";
    const trash=document.querySelectorAll(".trash");
    trash.forEach(element =>element.addEventListener('click',(e)=>{
        console.log(e.target);e.target.parentElement.parentElement.remove();}))
}
