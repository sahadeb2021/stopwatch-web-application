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




// add functionality on reset button
let reset_btn = document.getElementById("reset-btn");
reset_btn.addEventListener("click", ()=>{
    clearInterval(setIntervalFunc);
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("hour").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("second").innerText = "00";
    document.getElementById("milisecond").innerText = "00";


    let parent_start_stop = document.getElementsByClassName("start")[0];
    let child_node = parent_start_stop.children[0];
    // remove the current functionality from the start class
    // fix to start button after all
    parent_start_stop.removeChild(child_node);
    parent_start_stop.appendChild(start_btn);
})




// add laps container
let setLapIntervalFunc = null;
let total_laps = 0;
const laps_btn = document.getElementById("laps-btn");
laps_btn.addEventListener("click", ()=>{
    const laps_container = document.getElementsByClassName("laps-container")[0];
    if(laps_container.childElementCount === 0)
    {
        const table = document.createElement("table");
        const row = document.createElement("tr");
        const th1 = document.createElement("th");th1.className = "laps-val";th1.innerText = "Laps";
        const th2 = document.createElement("th");th2.className = "time-val";th2.innerText = "Times";
        const th3 = document.createElement("th");th3.className = "total-time-val";th3.innerText = "Total time";
        row.appendChild(th1);row.appendChild(th2);row.appendChild(th3);
        table.appendChild(row);
        laps_container.appendChild(table);
    }
    const table = laps_container.children[0];
    const row = document.createElement("tr");
    let last_lap = {
        hr:0,
        min:0,
        sec:0,
        ms:0,
    }
    setLapIntervalFunc = setInterval(()=>{
        last_lap.ms += 1;
        if(last_lap.ms == 100)
        {
            last_lap.ms = 0;
            last_lap.sec += 1;
            if(last_lap.sec == 60)
            {
                last_lap.sec = 0;
                last_lap.min += 1;
                if(last_lap.min == 60)
                {
                    last_lap.min = 0;
                    last_lap.hr += 1;
                }
            }
        }
    },10)
    total_laps += 1;
    const th1 = document.createElement("th");th1.className = "laps-val"; th1.innerText = total_laps;

    // create laps time column
    const th2 = document.createElement("th");th1.className = "time-val";
    th2.innerText = last_lap.hr < 10 ? "0" + last_lap.hr.toString() : last_lap.hr;
    th2.innerText += ":";
    th2.innerText += last_lap.min < 10 ? "0" + last_lap.min.toString() : last_lap.min;
    th2.innerText += ":";
    th2.innerText += last_lap.sec < 10 ? "0" + last_lap.sec.toString() : last_lap.sec;
    th2.innerText += ".";
    th2.innerText += last_lap.ms < 10 ? "0" + last_lap.ms.toString() : last_lap.ms;

    // create total time column
    const th3 = document.createElement("th");th1.className = "time-time-val";
    th3.innerText = document.getElementById("hour").innerText + ":";
    th3.innerText += document.getElementById("minute").innerText + ":";
    th3.innerText += document.getElementById("second").innerText + ".";
    th3.innerText += document.getElementById("milisecond").innerText;


    row.appendChild(th1); row.appendChild(th2); row.appendChild(th3);
    table.insert(row);

})






