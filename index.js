import {grid} from "./grid"
import {GridHandler} from "./GridHandler"


let cell0 = document.getElementById("0");
let cell1 = document.getElementById("1");
let cell2 = document.getElementById("2");
let cell3 = document.getElementById("3");
let cell4 = document.getElementById("4");
let cell5 = document.getElementById("5");
let cell6 = document.getElementById("6");
let cell7 = document.getElementById("7");
let cell8 = document.getElementById("8");


cell0.addEventListener("click", function() {click(cell0)},{once:true});
cell1.addEventListener("click", ()=> click(cell1), {once:true});
cell2.addEventListener("click", ()=> click(cell2), {once:true});
cell3.addEventListener("click", ()=> click(cell3), {once:true});
cell4.addEventListener("click", ()=> click(cell4), {once:true});
cell5.addEventListener("click", ()=> click(cell5), {once:true});
cell6.addEventListener("click", ()=> click(cell6), {once:true});
cell7.addEventListener("click", ()=> click(cell7), {once:true});
cell8.addEventListener("click", ()=> click(cell8), {once:true});





function click(cell)
{
    document.getElementById(cell.id).textContent = grid[cell.id];
    if(grid[cell.id] == "poo"||grid[cell.id] == "poo")
        {
            alert("you just shit yourself!");
            window.location.reload();
        } 
}

function clickCounter(cell)
{
    if(counter == 0)
    {
        
    }
}
function startingPosition ()
{

}
