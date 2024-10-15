let Containers = document.querySelector("#grid-container");

//header-columns
for(let col=0; col<=26; col++) 
{
    let newcol=document.createElement("div");
    if(col!=0)  //this will exclude the first column
    {
        newcol.innerText=String.fromCharCode(64+col); //this will add the text(value of column number) to the column
    }
    newcol.className="cell header"; //this will add a class name "header" to each column.
    Containers.append(newcol);
}

for(let row=1; row<=20; row++) //this loop will iterate for 20 rows
{
    let newrow = document.createElement("div"); // this will create a new div element for each row.

    //  newrow.style.backgroundColor = "lightgray";------------this will set the background color of the row to light gray. ----------- in css, display: contents will make the row disappear and css applied to this div is not visible.

     newrow.style.display= "contents"; //In CSS, the display: contents; property makes an element disappear visually while keeping its children visible and part of the normal document flow.
    
    //-------------------HEADER ROWS-------------------
     let headerrow=document.createElement("div"); // this will create a new div element for the header row.

    headerrow.innerText=row; //this will add the text(value of row number) to the header row.

    headerrow.className="cell header"; //this will add a class name "header" to the header row.
    newrow.append(headerrow); //this will add the header row to the container.

    for(let col=1; col<=26; col++)// this will iterate for 26 columns in single row
    {
        let newcol = document.createElement("div"); // this will create a new div element for each column in a single row
        // newcol.innerText= row+" "+col; //this will add the text(value of row and column number) to the column

        
       
        newcol.className="cell"; //this will add a class name "cell" to each column.
        newrow.append(newcol);  // this will add column to the row.

        newcol.contentEditable=true; //this will make the column content editable.
        
        newcol.addEventListener("click", multipleSelect); //this will add an event listener to each column to enable multiple selection.
    }

   
    Containers.append(newrow);
}

let selectedCellSet= new Set(); //this will create a set to store the selected cells.

function multipleSelect(e){
    // console.log(e);

    if(e.ctrlKey==false && e.metaKey==false )
    {
        for(let val of selectedCellSet)
        {
            val.classList.remove("selected");    //this will remove the class name "selected" from all the selected cells.
        }
        selectedCellSet.clear(); //this will clear the set if the user clicks on a cell without pressing the ctrl or meta key.
    }

    if(selectedCellSet.has(e.target))
    {
        
        e.target.classList.remove("selected"); //this will remove the class name "selected" from the selected cell. 
        selectedCellSet.delete(e.target); //this will remove the cell from the set if it is already selected.
        
    }

    else
    {
        e.target.classList.add("selected"); //this will add a class name "selected" to the selected cell.)
        selectedCellSet.add(e.target); //this will add the selected cell to the set.
    }
}
