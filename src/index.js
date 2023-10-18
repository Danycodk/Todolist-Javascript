import "./style.css";
const objectTask={
    typeTask:["Home"],
    name:["Myself"]
    

}
/*const test = "ohhhhhhh aaaaaaaaaannnnd the respond isssssss"+petitTEST()
console.log(test)
const petitTEST=() =>{
    console.log("yes or no it display")
} */
//const inputSearch= document.querySelector(".searchInput")

const form= document.querySelector("form")
form.addEventListener("submit",createTask)
const firstSelectTypeTask= document.querySelector("#formInputTask")
firstSelectTypeTask.addEventListener("input",createTask)
const createSearchBar= document.querySelector("form input")

const secondSelectTypeTask= document.querySelector("#names")

const buttonSubmit= document.querySelector(".submit")
//buttonSubmit.addEventListener("click",createTask)
/////////////////////////////////////////////////////////////////////////////
const conatainerTask= document.querySelector(".all-tasks")
const conatainerTaskBox= document.querySelector(".box-task")
const checkBox= document.querySelector(".box-task input")
const typetask= document.querySelector(".box-task p:nth-child(1)")
const titleTask= document.querySelector(".box-task h2")
const assignName= document.querySelector(".box-task p:nth-child(2")
const buttonChange= document.querySelector(".box-task button:nth-child(1)")
const buttonDelete= document.querySelector(".box-task button:nth-child(2)")
//////////////////////////////////////////////////////////////////////////////
function createTask(e) {
    e.preventDefault()
    //console.log(firstSelectTypeTask.value)
    if(firstSelectTypeTask.innerText !== "Select Tags"){
        const conatainerTaskBoxElement= document.createElement("div")
        conatainerTaskBoxElement.setAttribute("class","box-task")

        const inputElement= document.createElement("input")
        inputElement.setAttribute("type","checkbox")
        inputElement.setAttribute("name","checkbox")
        /////////////////////////////////////////
        const taskTypeElement= document.createElement("p")
        taskTypeElement.setAttribute("class","first")
        taskTypeElement.innerText= firstSelectTypeTask.value
        /////////////////////////////////////////
        const titleTaskElement= document.createElement("h2")
        titleTaskElement.innerText = createSearchBar.value
        ////////////////////////////////////////////
        const assignNameElement= document.createElement("p")
        assignNameElement.innerText = "Assign to"
       ///////////////////////////////////////////
        const assignNameElementSpan= document.createElement("span")
        assignNameElementSpan.innerText = secondSelectTypeTask.value
        //////////////////////////////////////////////
        const buttonChangeElement= document.createElement("button")
        buttonChangeElement.innerText="change"
        /////////////////////////////////////
        const buttonDeleteElement= document.createElement("button")
        buttonDeleteElement.innerText="Delete"

        
        conatainerTask.append(conatainerTaskBoxElement)
        conatainerTaskBoxElement.append(inputElement,taskTypeElement,
        titleTaskElement,assignNameElement,buttonChangeElement,buttonChangeElement,buttonDeleteElement)
        assignNameElement.append(assignNameElementSpan)
    }
}