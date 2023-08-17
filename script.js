const fastWork=document.getElementById("fastWork");
const secondWork=document.getElementById("secondWork");
const call=()=>{
    const d= new Date();
    const month= d.toLocaleString('default', { month: 'long' });
    const week= d.toLocaleString('default', { weekday: 'long' });
    const time =d.toLocaleString('default', { hour: 'numeric',minute: 'numeric',second: 'numeric', hour12: true })
    
    fastWork.innerHTML=d.getDate()+"-"+month+"-"+d.getFullYear()+"("+week+")";
    secondWork.innerHTML=time;

}
setInterval(()=>call(), 1000);

