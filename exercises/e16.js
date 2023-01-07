import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const years = data.asteroids.map(asteroid => asteroid.discoveryYear);
  
  //Function to find mode
  function mode(array) {
    let mode = 0
    let modeCount = 0
    let curValue = 0
    let curCount = 0
    for (let i=1; i < array.length; i++) {
      if (array[i] == curValue) {
        curCount = curCount + 1;
      } else {
        if (curCount > modeCount) {
          mode = curValue;
          modeCount = curCount;
        }
        curValue = array[i];
        curCount = 1;
       }
      }     
    if (curCount > modeCount) {
      mode = curValue
    }
    return mode;
  }

  const GreatestYear = mode(years);
  return GreatestYear;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
