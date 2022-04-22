function relogio(){
    const data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    const formatoHoras = horas < 10 ? horas = "0" + horas : horas = horas;
    const formatoMinutos = minutos < 10 ? minutos = "0" + minutos : minutos = minutos;
    const formatoSegundos = segundos < 10 ? segundos = "0" + segundos : segundos = segundos;
    document.getElementById("horas").innerText = formatoHoras;
    document.getElementById("minutos").innerText = formatoMinutos;
    document.getElementById("segundos").innerText = formatoSegundos;
};
setInterval(relogio,1000);