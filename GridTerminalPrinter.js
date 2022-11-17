const GridHandler = require ('./GridHandler')
const GridTerminalPrinter = class 
{
    constructor(grid)
    {
        this.grid = grid
    }

    createGrid()
    {   
        let g = ""; //griglia stampata come stringa
        for(let i = 0; i < this.grid.length; i++)
        {
            if (i % 3 == 0 && i != 0 )
            {   
                g = g + "\n";
            }
            g = g + this.grid.grid[i] + " ";
        }
        return g;
    }

    printGrid()
    {
        console.log(this.createGrid());
    }
}


module.exports = GridTerminalPrinter ;