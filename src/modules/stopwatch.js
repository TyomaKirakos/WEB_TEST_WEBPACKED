const stopwatch = () => {
    const stopwatchMinBlock = document.querySelector('.test-stopwatch__minutes');
    const stopwatchSecBlock = document.querySelector('.test-stopwatch__seconds');
    const finishBtn = document.querySelector('.test-page__finish-btn');

    let time;
    let stopwatch;
    
    // Секундомер

    window.addEventListener('load', () => {
        start();
    })

    finishBtn.addEventListener('click', stopStopwatch);

    function start(){
        time = 0;
        stopwatch = setInterval(stopWatch, 1000);
    }
    
    function stopWatch(){
        time++;
        if (time == 60){
            stopwatchMinBlock.textContent = Number(stopwatchMinBlock.textContent) + 1;
            stopwatchSecBlock.textContent = '00';
            time = 0;
        } else{
            if (String(time).length == 1){
                stopwatchSecBlock.textContent = '0' + time;
            } else{
                stopwatchSecBlock.textContent = time;
            }
        }
    }

    function stopStopwatch(){
        clearInterval(stopwatch);
    }
}

export default stopwatch;