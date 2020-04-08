const clear=document.querySelector(".clear");
const dateElement=document.getElementById("date");
const list=document.getElementById("list");
const input=document.getElementById("input");


const options={weekday:"long",month:"short", day:"numeric"};
const today=newDate();
dateElement.innerHTML=today.toLocaleDateString("en-US",options);
