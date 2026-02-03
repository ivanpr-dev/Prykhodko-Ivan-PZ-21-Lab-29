let alarmTime = null;
let alarmSet = false;
let sound = document.getElementById("alarmSound");
let status = document.getElementById("status");

document.getElementById("setAlarm").addEventListener("click", () => {
    const hours = document.getElementById("hours").value.padStart(2, '0');
    const minutes = document.getElementById("minutes").value.padStart(2, '0');
    alarmTime = `${hours}:${minutes}`;
    alarmSet = true;
    status.textContent = `Alarm was set to: ${alarmTime}`;
});

document.getElementById("stopAlarm").addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    status.textContent = "Alarm was stopped"
});

function checkAlarm() {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    if (alarmSet && currentTime === alarmTime) {
        status.textContent = "Alarm worked succesfully";
        sound.play();
        alarmSet = false;
    } 
};

setInterval(checkAlarm, 1000);