function jeu(){
    let niveau= window.prompt("donner le nombre de tentatives");
    let num=Math.floor(Math.random()*10);
   while (niveau){
    let n=window.prompt("devinez le nombre");
    if(n==num){
        alert("vous avez gangé");
    break;}
    else  {
       window.alert("reesayez")
    }
       niveau--;
  }
 let r=window.prompt("voulez vous reesayez?0 si non 1 si oui");
   if(r==1){jeu();}
   else if(r==0){ window.alert("merci pour avoir jouer")}
}
jeu();
