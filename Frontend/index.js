let button=document.querySelector('button');
let h2=document.querySelector('h2');
let flag=0;
var sleep={};
var sleepHour=0,sleepMinute=0,sleepSeconds=0
button.addEventListener('click',()=>{
    if(flag==0){
        button.innerHTML='Wake';
         sleepTime=new Date();
         sleepHour=sleepTime.getHours();
         sleepMinute=sleepTime.getMinutes();
         sleepSeconds=sleepTime.getSeconds();
        console.log(sleepTime);
        flag=1;
        sleep['sleepStart']=sleepTime;
    }
    else{
        button.innerHTML='Sleep';
        var wakeTime=new Date();
        var wakeHour=wakeTime.getHours();
        var wakeMinute=wakeTime.getMinutes();
        var wakeSeconds=wakeTime.getSeconds();
        console.log(wakeTime,wakeHour,sleepHour)
        flag=0;
        sleep['sleepEnd']=wakeTime;
        
    h2.innerHTML= `You slept for ${wakeHour-sleepHour} hours ${wakeMinute-sleepMinute} minutes and ${wakeSeconds-sleepSeconds} seconds`

        fetch('http://localhost/',{
            method:'POST',
            headers:{
                Accept:'application.json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sleep)
        })

        
    }

})

