const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

window.addEventListener("load", loadData);


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

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

