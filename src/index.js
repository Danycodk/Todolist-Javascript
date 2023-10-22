import "./style.css";
//the problem is that in the deletefunction we don t know about any creation of task that were create with document.create 
//get all button element to use closet 
const deleteTaskBox= document.getElementsByClassName("all-tasks")[0]
console.log(deleteTaskBox)
//const inputSearch= document.querySelector(".searchInput")
let dataId= 0 ;
const form= document.querySelector("form")
form.addEventListener("submit",createTask)
const firstSelectTypeTask= document.querySelector("#formInputTask")

const createSearchBar= document.querySelector("form input")

const secondSelectTypeTask= document.querySelector("#names")

const buttonSubmit= document.querySelector(".submit")
//buttonSubmit.addEventListener("click",createTask)
/////////////////////////////////////////////////////////////////////////////
//-------------existant tags---------------------------//////////////////
const conatainerTask= document.querySelector(".all-tasks")
const fConatainerTaskBox= document.querySelector(".box-task .firstB")
const sConatainerTaskBox= document.querySelector(".box-task .secondB")
const tConatainerTaskBox= document.querySelector(".box-task .thridB")
//conatainerTaskBox.setAttribute("data-id",dataId)
const checkBox= document.querySelector(".box-task input")
const typetask= document.querySelector(".box-task p:nth-child(1)")
const titleTask= document.querySelector(".box-task h2")
const assignName= document.querySelector(".box-task p:nth-child(2")
const buttonChange= document.querySelector(".box-task button:nth-child(2)")
const buttonDelete= document.querySelector(".box-task .delete")
buttonDelete.addEventListener("click",deleteAction)
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*const conatainerTaskBoxElement= document.createElement("div")
conatainerTaskBoxElement.setAttribute("class","box-task")
conatainerTaskBoxElement.setAttribute("data-id",dataId)
///////////////////////////////////////////
const inputElement= document.createElement("input")
inputElement.setAttribute("type","checkbox")
inputElement.setAttribute("name","checkbox")
//////////////////////////////////////////////
const taskTypeElement= document.createElement("p")
taskTypeElement.classList.add("first")
taskTypeElement.setAttribute("class",firstSelectTypeTask.value)
taskTypeElement.innerText="let s go"//firstSelectTypeTask.value
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
buttonDeleteElement.setAttribute("class","delete")
buttonDeleteElement.addEventListener("click",deleteAction) */
////////////////////////////////////////////////////
///////////////////////////////////////////////////
function createTask(e) {
    e.preventDefault()
    dataId +=1
    if(firstSelectTypeTask.value !=="Select Tags"){
        //conatainerTaskBoxElement.setAttribute("data-id",dataId)
        const conatainerTaskBoxElement= document.createElement("div")
        conatainerTaskBoxElement.setAttribute("class","box-task")
        conatainerTaskBoxElement.setAttribute("data-id",dataId)
///////////////////////////////////////////
        const inputElement= document.createElement("input")
        inputElement.setAttribute("type","checkbox")
        inputElement.setAttribute("name","checkbox")
//////////////////////////////////////////////
        const taskTypeElement= document.createElement("p")
        taskTypeElement.setAttribute("class",firstSelectTypeTask.value)
        taskTypeElement.classList.add("first")
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
        buttonDeleteElement.setAttribute("class","delete")
        buttonDeleteElement.addEventListener("click",deleteAction)
        
        conatainerTask.append(conatainerTaskBoxElement)
        conatainerTaskBoxElement.append(inputElement,taskTypeElement,
        titleTaskElement,assignNameElement,buttonChangeElement,buttonChangeElement,buttonDeleteElement)
        assignNameElement.append(assignNameElementSpan)
    }


}

function deleteAction(e){
    console.log("yess u are in the good path")
  //  const boxTaskArray = Array.from(deleteTaskBox.getElementsByClassName("box-task"));
  //const parentButton = buttonDelete.parentElement
        e.currentTarget.parentNode.remove();
    
    console.log(e)  ;
   // const firstBElements = boxTaskArray.filter(element => element.dataset.id  );

}



