const fernet = 1400;
const coca = 210;
const hielo = 200;
const vodka = 1300;
const speed = 300;
const gin = 2500;
const sprite = 200;
const envio = 80;


let respuestaClave = prompt("Quiere fernet , vodka o gin?") 

function sumarFernet(fernet,coca,hielo) {
    const resultado = (fernet + coca + hielo)
    
    return resultado
   
}


function sumarVodkas(vodka,speed,hielo){
 const resultadoUno = (vodka + speed + hielo)
  return resultadoUno
   
}

function sumarGin(gin,sprite,hielo){
    const resultadoGin = (gin + sprite + hielo)
    return resultadoGin
}

function sumarEnvio(envio){
    const sumaEnvio =(envio)
    return sumaEnvio
}



if(respuestaClave == "fernet" ){
    alert("El total es $"+sumarFernet(fernet,coca,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarFernet(fernet,coca,hielo)+ sumarEnvio(envio)));
    }

}


   

if(respuestaClave == "vodka"){
    alert("El total es $"+sumarVodkas(vodka,speed,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarVodkas(vodka,speed,hielo)+ sumarEnvio(envio)));
    }

}

    



if(respuestaClave == "gin"){
    alert("El total es $"+sumarGin(gin,sprite,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarGin(gin,sprite,hielo)+ sumarEnvio(envio)));
    }
}
class Producto{
    constructor(marca, nombre, precio, moneda,){
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.moneda = moneda;
        this.precioEnvio = 200;
    }

    cuantoQuedoConIva(){
      return(this.precio *1.21);
    }
    cuantoQuedaConEnvio(){
        return this.moneda+(this.cuantoQuedoConIva() + this.precioEnvio);
    }
}
const Fernet = new Producto("Branca", "Fernet", 1400, "$")
const vodkas = new Producto("absolut", "vodka", 1300, "$" )
const gins = new Producto("Bombai","gin",2300, "$")
const gin2 = new Producto("Herederos","gin",2200,"$")
console.log(vodkas);
console.log(gins);
console.log(gin2)
console.log(Fernet);

const tabaco =[
    {name: "marlboro", value:280,size:20},{name:"philips", value:290,size:20},{name:"lucky", value: 170, size:10},{name:"camel", value:210, size:20}
];
console.log(tabaco.sort(function(a,b){
    if(a.value > b.value){return 1;}else if(a.value < b.value){return-1}
}));

 
let titulo = document.getElementById("titulo");
titulo.style.color = "red";
  
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2> Bienvenidos</h2>";
document.body.appendChild(parrafo);
let boton = document.getElementById("boton");
boton.onclick = function(){
    titulo.style.color = "green";

    }