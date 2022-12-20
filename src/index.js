import "./style.scss";

const counter = setInterval(function () {

    const init = new Date('December 24, 2022 23:59:59').getTime();

    const today = new Date().getTime();

    let subtr = init - today;

    subtr /= 1000;

    const days = Math.floor(subtr / (60 * 60 * 24));

    const hours = Math.floor((subtr % (60 * 60 * 24)) / (60 * 60));

    const minutes = Math.floor((subtr % (60 * 60)) / (60));

    const seconds = Math.floor(subtr % (60));


    const count = document.getElementById('counter');

    count.innerHTML = `<div class="counter_child" id="days">
                        <h1>${days}</h1>
                        <p>DAYS</p>
                    </div>
                    <div class="counter_child" id="hours">
                        <h1>${hours}</h1>
                        <p>HOURS</p>
                    </div>
                    <div class="counter_child" id="minutes">
                        <h1>${minutes}</h1>
                        <p>MINUTES</p>
                    </div>
                    <div class="counter_child" id="seconds">
                        <h1>${seconds}</h1>
                        <p>SECONDS</p>
                    </div>`;
}, 1000);

