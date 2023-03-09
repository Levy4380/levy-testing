function changeColor(){
    let saludo = document.querySelector(".saludo");
    let chamuyo = document.querySelector(".chamuyo");
    let chamuyo2 = document.querySelector(".chamuyo2");
    if(saludo.style.display=="none"){
        chamuyo.style.display="none";
        chamuyo2.style.display="none";
        saludo.style.display="block"
    } else{
        saludo.style.display="none";
        chamuyo.style.display="block";
        chamuyo2.style.display="block";
        console.log('hola')
    }
    
}
