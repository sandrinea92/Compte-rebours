let startBtn = document.getElementById("btnStart");
let nbrTimer = document.getElementById("nbrTimer");

let time = 9;

function timerOut() {

    startBtn.remove();
    nbrTimer.textContent = 10;

    function timer() {
        nbrTimer.textContent = time;
        time--

        if (time < 0) {
            clearInterval(timer);
            nbrTimer.textContent = "Go!!"
        }

    }

    setInterval(timer, 1000);
}

startBtn.addEventListener("click", timerOut);
