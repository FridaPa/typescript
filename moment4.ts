declare function require(name:string);
var fs = require('fs');

class FilePublisher {
    protected filename: string;

    constructor(name: string) {
        this.filename = name;
    } 

    public showFile(): void {
        fs.readFile(this.filename, 'utf8', function(err, data) { // Read all of the file content 
            if (err) throw err;
            //console.log(data); // Print all data to the console
			  //städa bort alla ord fr specialtecken
			let clean: string[];
			let reg:RegExp = /\s|-/; //tar bort mellanslag, punker 
			 clean = data.split(reg);
        //}); 
		
			//skapar assosiativ array som lagrar antal av avrje ord
		let count = {};
		for(let key of clean){  // för varje elemENT I ARRAYEN CLEAN
	        //om count i inte är odefinierad ska den plussas med 1, annars ta värdet 1. 
			if(count[key] != undefined){
				count[key] = count[key]+1;
			} else {
				count[key] = 1;
			}
          // elementen är "i" och antal är "count[i]" i är key som konnektar de båda arrayerna
			//console.log(i+": "+count[i]);  	
		}	
			
			
			let sorted = []; // skapa ny array för att sortera
			for (let key in count) sorted.push([key, count[key]]);  //pushar in element i sorted arrayen 
			sorted.sort(function (a, b) { //sorterar med att anropa funktionen sort
				return a[1] - b[1]; // kollar vilka som är lägst och högst
				
			});
			
			sorted.reverse(); // så att det blir fr högst till lägst
			console.log(sorted.slice(0,10)); // Show the 10 highest values
			
		});
    }

}
	



let obj = new FilePublisher("hitch.txt");
obj.showFile();

//nu skriver den ut alla ord som finns och hur många men tar ej bort space och punkter


