window.onload = function(){
    let msecs = 00;
    let secs = 00;
    let mins = 00;
    let appendmins = document.getElementById('mins');
    let appendsecs = document.getElementById('secs');
    let appendmsecs = document.getElementById('msecs');
    var buttonPause = document.getElementById('button-pause');
    var buttonStart = document.getElementById('button-start');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
}
buttonPause.onclick = function(){
    clearInterval(Interval);
}
buttonReset.onclick = function(){
    clearInterval(Interval);
    msecs = "00";
    secs = "00";
    mins = "00";
    appendmins.innerHTML = mins;
    appendsecs.innerHTML = secs;
    appendmsecs.innerHTML = msecs;
}

function startTimer(){
        msecs++
        if(msecs <= 9){
            appendmsecs.innerHTML = "0" + msecs;
        }
        if(msecs > 9){
            appendmsecs.innerHTML = msecs;
        }
        if(msecs > 99){
            secs++
            if(secs <= 9){
                appendsecs.innerHTML = "0" + secs;
            }
            if(secs > 9){
                appendsecs.innerHTML = secs;
            }
            msecs = 0;
            appendmsecs.innerHTML = "0" + 0;
        }
        if(secs > 59){
            mins++;
            if(mins <= 9){
                appendmins.innerHTML = "0" + mins;
            }
            if(mins > 9){
                appendmins.innerHTML = mins;
            }
            secs = 0;
            appendsecs.innerHTML = "0" + 0;
        }
    }
}
