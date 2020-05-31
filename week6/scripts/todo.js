// selecting elements
//clear
const clear = document.querySelector(".clear");
//date
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables
//  Let LIST = [] ,
//  id = 0;

//todays date
const options = {weekday : "long", month:"short", day:"numeric"};  
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// --------TO DO FUNCTION---------//
function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : " ";

    const item = `<li class="item">          
                            <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                            <p class="text ${LINE}">${toDo}</p>
                            <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
            `;
const position = "beforeend";

list.insertAdjacentHTML(position, item);
}
// add item to list w enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        //if input isnt empty
        if(toDo){
            addToDo(toDo);
            
            LIST.push({
                name : toDo?
                id : id,
                done: false,
                trash: false
            });
        }
        input.value = "";
        id++;
    }
});

addToDo("Finsh Assignment", 1, true, false);

// const input = document.getElementById("input");

// document.addEventListener("keyup", function(event)){
//     if(event.keyCode == 13){
//         const toDo = input.value;
//         if(toDo){
//             addToDo(toDo,id, false, false);
//             LIST.push(
//                 {
//                     name: toDo,
//                     id: id,
//                     done: false,
//                     trash:false
//                 }
//             );
//         }
//         input.value = "";
//         id++;
//     }
// }

// const CHECK ="fa-check-circle"; //change later
// const UNCHECK ="fa-circle-thin";
// const LINE_THROUGH = "lineThrough";

// function addToDo( toDo,id,done,trash ){

//     if(trash){ return; }

//     const DONE = done ? CHECK : UNCHECK;
//     const LINE = done ?
// }
// // store to do //

// let LIST = [];
// let id = 0;
// LIST = [{} ,{} , ... ];

// //local storage

// localStorage.getItem('key', 'value');
// let variable = localStorage.getItem('key');

// localStorage.setItem("TODO", JSON.stringify(LIST));

// let data = localStorage.getItem("TODO");
// if(data){
//     LIST = JSON.parse(data);
//     loadToDo(List);
//     id = LIST.length;
// } else {
//     LIST = [];
//     id = 0;
// }


// // ----- clear local storaage ---------//

// const cleaara = document.getElementById(".clear")