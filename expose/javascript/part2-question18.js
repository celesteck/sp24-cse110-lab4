function printSeconds() {
    let d = new Date();              
    let time = d.toLocaleTimeString();  
    console.log(time);                

    setTimeout(printTime, 1000);      
}

printSeconds();
