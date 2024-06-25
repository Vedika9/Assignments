let taskinput=document.getElementById("taskinput");
let addbtn=document.getElementById("addtask");
let tasklist=document.getElementById("tasklist");

 loadtask();

function addtask(){
     let task=taskinput.value.trim();
     if(task){
                 addelement(task);
                 taskinput.value="";
         savetask();
     }
     else{
        alert("please enter the task");
     }

 }
 addbtn.addEventListener("click",addtask);

function addelement(task){
    let listitem=document.createElement('li');
     listitem.textContent=task;
     let deletebtn=document.createElement("button");
     deletebtn.textContent='Delete';
     deletebtn.className='deletebtn';
     listitem.appendChild(deletebtn);
     tasklist.appendChild(listitem);

     deletebtn.addEventListener("click",function(){
        tasklist.removeChild(listitem);
        savetask();
     });
 }

 function savetask(){
        let tasks=[];
     tasklist.querySelectorAll('li').forEach(function(item){
         tasks.push(item.textContent.replace("Delete","").trim());
     });
     localStorage.setItem("tasks",JSON.stringify(tasks));
 }

 function loadtask(){
     let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
     tasks.forEach(addelement);
 }