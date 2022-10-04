function initMap() {
    const coordenadas = { lat: -37.3193093, lng: -59.2779899 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coordenadas

    });
    const marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    })

}


let contador = document.getElementById("contador");
let deadline = new Date("Dic, 2023 00:00:00").getTime();


let x= setInterval(function(){
let now= new Date().getTime();
let time = deadline - now;
let days = Math.floor(time / (1000 * 60 *60 *24));
var hours= Math.floor((time %( 1000 *60 *60*24))/(1000 *60*60));
var minutes= Math.floor((time %( 1000 *60 *60))/(1000 *60));
var seconds= Math.floor((time %( 1000 *60))/1000);

contador.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "


if (time < 0) {
    clearInterval(x);
    contador.innerHTML = "El futuro llego!!!";
}

}, 1000);
    