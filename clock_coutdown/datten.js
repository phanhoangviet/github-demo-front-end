setInterval(function countDown() {
    let now=new Date();
    let tet=new Date("2021-02-12 00:00:00");

    let timegiay=now.getTime();
    let tetgiay=tet.getTime();

    let remTime=tetgiay-timegiay;

    let s=Math.floor(remTime/1000);
    let m=Math.floor(s/60);
    let h=Math.floor(m/60);
    let d=Math.floor(h/24);

    h %=24;
    m %=60;
    s %=60;
    
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
   
    document.getElementById("minutes").textContent = m;
    
    document.getElementById("seconds").textContent = s;
    

    setTimeout(countDown,1000);
})