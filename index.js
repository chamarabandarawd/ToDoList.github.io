const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


const addTask = () =>{
    let task = inputBox.value;
    if(task===''){
        alert("You must enter task frist!...")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=task;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        

    }
    inputBox.value = '';
    saveData();
}
