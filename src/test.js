import "./style.css";
//data-id to filter/delete/change task
let dataId= 3

//get all button element to use closet 
const deleteButtonAll= document.getElementsByClassName("delete")
//const inputSearch= document.querySelector(".searchInput")

const form= document.querySelector("form")
form.addEventListener("submit",createTask)
const firstSelectTypeTask= document.querySelector("#formInputTask")

const createSearchBar= document.querySelector("form input")

const secondSelectTypeTask= document.querySelector("#names")

const buttonSubmit= document.querySelector(".submit")
//buttonSubmit.addEventListener("click",createTask)
/////////////////////////////////////////////////////////////////////////////
const conatainerTask= document.querySelector(".all-tasks")
const conatainerTaskBox= document.querySelector(".box-task")
//conatainerTaskBox.setAttribute("data-id",dataId)
const checkBox= document.querySelector(".box-task input")
const typetask= document.querySelector(".box-task p:nth-child(1)")
const titleTask= document.querySelector(".box-task h2")
const assignName= document.querySelector(".box-task p:nth-child(2")
const buttonChange= document.querySelector(".box-task button:nth-child(2)")
const buttonDelete= document.querySelector(".box-task .delete")
buttonDelete.addEventListener("click",deleteAction)
//////////////////////////////////////////////////////////////////////////////

function changeAction(e){
    //gotta convert the <h2> balise to an <input> balise
}

function createTask(e) {
    e.preventDefault()
    
    if(firstSelectTypeTask.innerText !== "Select Tags"){
            
        dataId +=1
        const conatainerTaskBoxElement= document.createElement("div")
        conatainerTaskBoxElement.setAttribute("class","box-task")
        conatainerTaskBoxElement.setAttribute("data-id",dataId)
        //console.log(conatainerTaskBoxElement.getAttribute("data-id"))

        const inputElement= document.createElement("input")
        inputElement.setAttribute("type","checkbox")
        inputElement.setAttribute("name","checkbox")
        /////////////////////////////////////////
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

        
        conatainerTask.append(conatainerTaskBoxElement)
        conatainerTaskBoxElement.append(inputElement,taskTypeElement,
        titleTaskElement,assignNameElement,buttonChangeElement,buttonChangeElement,buttonDeleteElement)
        assignNameElement.append(assignNameElementSpan)
    }
}
////////////////////////////////////////////////
function deleteAction(e){
    console.log()
    //console.log(conatainerTaskBoxElement.dataset.id)
   /* for (let i=0 ; i < deleteButtonAll.length; i++){
        
        let specifiquedeleteButtonAll= deleteButtonAll[i]    
        //let idBoxTask = specifiquedeleteButtonAll.closest('.box-task'); 
            let idBoxTask = specifiquedeleteButtonAll.closest('.box-task').getAttribute('data-id');
            console.log(idBoxTask)
            //const del =deleteButtonAll.filter(el=>el.dataset.id !== idBoxTask.dataset.id)
            //if(del){

            //}
        }     */
}