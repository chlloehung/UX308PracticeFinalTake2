import {colourMix, largestProduct, dayOfTheWeek, payRaise, isLeap} from './functions.js';

function Question1(){
    return <section>
1. Determine the secondary RGB colour from mixing two primary RGB colours. 
     <h2>results</h2>
     <p>colourMix("blue", "red") == "{colourMix('blue', 'red')}"</p>     
     <p>colourMix("blue", "blue") == "{colourMix('blue', 'blue')}"</p> 
     <p>colourMix("green", "red") == "{colourMix('green', 'red')}"</p>      
    </section>;
}

function Question2(){
    return <section>
2. Return the product of the two largest values out of three numbers.
     <h2>results</h2>
     <p>largestProduct(3, 7, 10) == "{largestProduct(3, 7, 10)}"</p>   
     <p>largestProduct(15, -5, 2) == "{largestProduct(15, -5, 2)}"</p>         
     <p>largestProduct(6, 6, 9) == "{largestProduct(6, 6, 9)}"</p>      
    </section>;
}

function Question3(){
    return <section>
3. Return the name of a day of the week given an integer day number.   
     <h2>results</h2>
     <p>dayOfTheWeek(2) == "{dayOfTheWeek(2)}"</p>   
     <p>dayOfTheWeek(6) == "{dayOfTheWeek(6)}"</p>   
     <p>dayOfTheWeek(9) == "{dayOfTheWeek(9)}"</p>  
    </section>;
}

function Question4(){
    return <section>
4. Calculate pay raises for employees.
     <h2>results</h2>
     <p>payRaise('F', 3, 10000) == "{payRaise('F', 3, 10000)}"</p>
     <p>payRaise('P', 11, 15000) == "{payRaise('P', 11, 15000)}"</p>
     <p>payRaise('F', 6, 40000) == "{payRaise('F', 6, 40000)}"</p>
    </section>;
}

function Question5(){
    return <section>
5. Determine if a year is a leap year.
     <h2>results</h2>
     <p>isLeap(4) == "{isLeap(4).toString()}"</p>      
     <p>isLeap(100) == "{isLeap(100).toString()}"</p>   
     <p>isLeap(2024) == "{isLeap(2024).toString()}"</p>  
   </section>;
}

export {Question1, Question2, Question3, Question4, Question5}