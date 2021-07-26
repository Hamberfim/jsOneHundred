"use strict";

//get starting values from the screen
function getValues() {

    //1. get the values from the page
    //Here we need to use javascript to "Get" the values fromt the Html file.
    //We can do this with javascript because all of the html tags are accessible 
    //and we simply need to (id)entify them!
    //DO:
    //Use "document.getElementById" to locate and your html tags for startValue and endValue


    //2. parse our input in integers    
    //Now convert your values for startValue and endValue to integers. (ie. startValue.value/endValue.value)
    //DO:
    //Use the "parseInt()" function to convert them


    //3. check to see if they are in fact integers
    //Now validate that you will be using actual Numbers throughout the rest of the code.
    //Do:
    //Test your new integers with an "if-statement".  You'll need to be sure that 
    //both startValue and endValue are Numbers so use the "&&" in your if-statement to be sure.
    //Wrap each value with the Number.isInteger function when testing
    {

        //4. generate the numbers return them in an array
        //If both values are Numbers then call your custom function generateNumbers().
        //DO:
        //Pass both values to the generateNumbers(startValue, endValue) and store the
        //result in a variable called numbers.


        //5. display the results on the page 
        //Call your custom function displayNumbers to show the result on the page.
        //DO:
        //Pass your "numbers" variable to the displayNumbers(numbers) function

    
    }
}

//Generate numbers based on the start and endvalue
function generateNumbers(startValue, endValue) {
    //DO:
    //Declare an array variable called numbers and set it equal to []
    
    
    //loop over the values from start to end.
    //DO:
    //Add a "for-loop" here that is controlled by your parameters
    //startValue and endValue
   {
       //DO:
       //In the for-loop, add each nember encounterd to the "numbers" array
        
    }
    
    //DO:
    //Return the "numbers" array

}


//display the numbers to the screen
function displayNumbers(numbers) {
    //DO:
    //Delare a variable called "className" and set it equal to 'even'

    //DO:
    //Decalre a variable called "templateRows" and set it equal to ''

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