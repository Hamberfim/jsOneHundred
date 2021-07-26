"use strict";

//Start or Controll function - get needed values
function getValues() {

    // get unique input values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // Use the "parseInt()" function to cast/convert from string input to integers    
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // validate - check if above parsed input are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // if true call generateNumbers() - generate the numbers return them in an array
        let numbers = generateNumbers(startValue, endValue);

        // Call the display function with "numbers" variable to display results on the page 

        displayNumbers(numbers)

    } else {
        alert("You must enter whole numbers.");
    }

    console.log(`Start Value ${startValue}, data type: ${typeof(startValue)}`);
    console.log(`End Value ${endValue}, data type: ${typeof(endValue)}`);

}

//Logic function - Generate numbers based on the start and endvalue
function generateNumbers(sValue, eValue) {
    // Declare an array variable called numbers and set it equal to []
    let numbers = [];


    // loop over the sValue and eValue from start to end.
    for (let i = sValue; i <= eValue; i++) {
        // add each number to the "numbers" array
        numbers.push(i);

    }

    //Return the "numbers" array
    return numbers;

}


//View/Display Function - display the results (numbers) to the screen
function displayNumbers(numbers) {
    //DO:
    //Delare a variable called "className" and set it equal to 'even'
    let className;

    //DO:
    //Decalre a variable called "templateRows" and set it equal to ''
    let templateRows;

    //DO:
    //Create a for-loop that will loop through all of the items in the
    //numbers array.  Use a loop control variable called "index" and 
    //Remember to start at 0 and to only allow your loop to 
    //run up to numbers.length-1
    {
        //DO:
        //In your for-loop declare a variable called "number" and set it equal to 
        //numbers[index]

        //DO:
        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //of the number 2. (ie. number % 2 == 0)
        {
            //DO: 
            //If your number is modulus 2 then set "className" equal to 'even'
            
        } else {
            //DO:
            //Else set "className" equal to 'odd'

        }
        
        //DO:
        //Each time through the loop concatenate "templateRows" with the following markup
        //`<tr><td class="${className}">${number}</td></tr>`.  
        // ** Note to concatenate use the "+=" symbol
        // You should be able to recognize tabove markup as html
    }

    //DO:
    //Finally, show your resulting markkup on your page using getElementbyId.
    //Find the "results" element and set it's innerHTML to "templateRows"

}