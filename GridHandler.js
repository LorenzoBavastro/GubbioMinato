//NUM FERNANDA010 6545332 
import { grid } from "./grid";
const GridHandler = class
{
    constructor(numOfPoo)
    {
        this.numOfPoo = numOfPoo;

    }

    pooDropper()
    {
        for (let i = 0; i < numOfPoo; i++)
        {
           let poo =  Math.floor(math.random()* this.numOfPoo);
           grid[poo] = "poo"
        }
    }

    

}


export {GridHandler};