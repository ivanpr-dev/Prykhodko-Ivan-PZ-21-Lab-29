function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); 

    currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = currentTime;
}

setInterval(updateClock, 1000);
updateClock();