function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const currentTime = Date.now();
    timeElement.textContent = `${currentTime} ms`;
}

updateTime();
setInterval(updateTime, 1000);

