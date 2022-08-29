console.log('Si funca deaah');

const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)

const main = qs('.container')
const link = qs('a')
const subtitulo = qs('h2.subtitulo')
const parrafos = qsa('p')

// let nombre = prompt('Decime tu nombre')

/* while(nombre === ""){
    nombre = prompt('Decime tu nombre')
} */

/* if(nombre){
    subtitulo.innerHTML += nombre
}else{
    subtitulo.innerHTML += 'Invitado'
} */

subtitulo.style.textTransform = 'uppercase'

link.style.color = "#E51B3E"

/* let respuesta = confirm('Desea agregar un fondo de pantalla?')

if(respuesta){
    qs('body').classList.add('fondo')
}
 */
for (let i = 0; i < parrafos.length; i++) {
    if(i % 2 === 0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        parrafos[i].classList.add('destacadoImpar')
    }
}

main.style.display = "block"