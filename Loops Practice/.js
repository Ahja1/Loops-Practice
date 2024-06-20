//***Article 1 - Break stops the execution of a loop
//***Article 2 - Infinate Loops are theoretically repeated forever

// ***********Exercise 1 *********************

let loggedIn = false;
let loopCounter = 0;

while (!loggedIn) {
  console.log("Incorrect login credentials");
  if (loopCounter === 2) {
    loggedIn = true;
  }
  loopCounter++;
}

console.log("Successfully logged in!");




//***********Exercise 2 *********************
/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

// Printing even numbers
let number = 10;
while (number <= 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

// Printing odd numbers
let i = 10;
while (i <= 40) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}









// Exercise 3

/*
     Create a while loop that runs from 1-100
    Every 10 loops, print out: Checkpoint! and the loop number
    On loop 50 print out ONLY: Half way there!
    On the final loop (100) print out ONLY: You made it!
    AFTER the loop is done, print out: All, done!
*/

let count = 1;

while (count <= 100) {
  if (count === 50) {
    console.log("Half way there!")
    count++;
    continue;
  }

  if (count === 100) {
    console.log("You made it");
    count++;
    continue;
  }


  if (count % 10 === 0) {
    console.log(`Checkpoint! ${count}`);
  }

  count++;
}

console.log("All done");