function changeColor(){
    let saludo = document.querySelector(".saludo");
    let chamuyo = document.querySelector(".chamuyo");
    if(saludo.style.display=="none"){
        chamuyo.style.display="none";
        saludo.style.display="block"
    } else{
        saludo.style.display="none";
        chamuyo.style.display="block"
        console.log('hola')
    }
    
}