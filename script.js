// add a task function 
// mark as done function
// clear completed function
// filtiration (active,compleated,all)
// dynamic text showing how many tasks left
// import  $ from 'jquery'
const body = $("body")
const todoElement = $("#todo-element") 
const group = $(".group")
const checkedItems = $(".task:checked");

let itemNum = 2;

// function to add tasks 
function addTask(){
    
    let task = $("input").val()
    let dynamiclist = $("<li></li>")
    dynamiclist.addClass("list-group-item")
    let input = $("<input>")
    input.attr("id", `item${itemNum}`);
    input.addClass("task")
    input.attr("type","checkbox")
    let label = $("<label></label>")
    label.attr("for",`item${itemNum}`)
    label.text(task)

    dynamiclist.append(input)
    dynamiclist.append(label)
    group.append(dynamiclist)
    markAsCompleted();

    
}

function clearCompleted(){
    const warapper = document.querySelectorAll(".list-group-item")
    const toBeCleared = []
    for(let i = 0; i< taskNum();i++){
        if (warapper[i].classList.contains("checked") ){
            toBeCleared.push(warapper[i])
        }
    }
    return toBeCleared

}

function taskNum(){
    const warapper = document.querySelectorAll(".list-group-item")
     return warapper.length

}

const Completed =$(".clear-completed")


const tasks = document.querySelectorAll(".task")
function markAsCompleted(){
    const warapper = document.querySelectorAll(".list-group-item");
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(function(task, index) {
        task.addEventListener("click", function() {
            // Add 'checked' class to the parent list item
            if (task.checked) {
                warapper[index].classList.add("checked");
            } else {
                warapper[index].classList.remove("checked");
            }
        });
    });
}





const button = $(".btn-outline-secondary")
button.on("click",function(){
    addTask()
    itemNum ++

})
markAsCompleted()
Completed.on("click",function(){
    clearCompleted().forEach(function(taskcompleted){
        taskcompleted.remove()
    })
   

})


console.log(taskNum())