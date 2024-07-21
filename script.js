// add a task function 
// mark as done function
// clear completed function
// filtiration (active,compleated,all)
// dynamic text showing how many tasks left
// import  $ from 'jquery'
const body = $("body")
const todoElement = $("#todo-element") 




function addTask(){
    let itemNum = 2;
    let task = $("input").val()
    let dynamiclist = $("<li></li>")
    dynamiclist.addClass("list-group-item")
    let input = $("<input>")
    input.attr("id", `item${itemNum}`);
    input.attr("type","checkbox")
    let label = $("<label></label>")
    label.attr("for",`item${itemNum}`)
    label.text(task)
    
    todoElement.append(dynamiclist)
    dynamiclist.append(input)
    dynamiclist.append(label)
    itemNum += 1
}
const button = $(".btn")
button.on("click",function(){
    addTask()
})
