//obtener el elemento po ID

let parrafo = document.getElementById(miParrafo);
console.log(parrafo.textContenten);

let botton = documen.getElementBYid("miBoton");
botton.addventListener("clik", function (){
    parrafo.textcontent = "texto actualizado";
    console.log(parrafo.textContent);
})