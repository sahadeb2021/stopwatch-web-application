let ms = 0;  // milisecond
let sec = 0; // second
let min = 0;  //minute
let hr = 0;   // hour

let setIntervalFunc = null;




let start_btn = document.createElement("img");
start_btn.id = "start-btn";
start_btn.src = "./icons/start.png";

let stop_btn = document.createElement("img");
stop_btn.id = "stop-btn";
stop_btn.src = "./icons/pause.png";

start_btn.addEventListener("click", ()=>{
    setIntervalFunc = setInterval(()=>{
        ms += 1;
        if(ms > 99)
        {
            ms = ms%100;
            sec += 1;
        }
        if(sec > 59)
        {
            sec = sec%60;
            min += 1;
        }
        if(min > 60)
        {
            min = min%60;
            hr += 1;
        }
        if(document.getElementById("hour").innerText != hr)
        {
            if(hr<10)
                document.getElementById("hour").innerText = "0" + hr.toString();
            else
            document.getElementById("hour").innerText = hr;
        }
            
        if(document.getElementById("minute").innerText != min)
            if(min<10)
                document.getElementById("minute").innerText = "0" + min.toString();
            else
            document.getElementById("minute").innerText = min;


        if(document.getElementById("second").innerText != sec)
            if(sec<10)
                document.getElementById("second").innerText = "0" + sec.toString();
            else
            document.getElementById("second").innerText = sec;

        if(document.getElementById("milisecond").innerText != ms)
            if(ms < 10)
                document.getElementById("milisecond").innerText = "0" + ms.toString();
            else
                document.getElementById("milisecond").innerText = ms;
            
    },10)
    let parent_ele = document.getElementsByClassName("start")[0];
    parent_ele.removeChild(start_btn);
    parent_ele.appendChild(stop_btn);
})

let parent_ele = document.getElementsByClassName("start")[0];
parent_ele.appendChild(start_btn)


stop_btn.addEventListener("click", ()=>{
    clearInterval(setIntervalFunc);
    let parent_ele = document.getElementsByClassName("start")[0];
    parent_ele.removeChild(stop_btn);
    parent_ele.appendChild(start_btn);
})









