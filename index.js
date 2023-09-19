let time = document.getElementById('time');

setInterval(() => {
    let date = new Date();
    //Using padStart to ensure two-digit format
    let hours = (date.getHours() - 12).toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    time.innerHTML = hours + " : " + minutes + " : " + seconds;

}, 1000)