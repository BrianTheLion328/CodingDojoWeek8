import './App.css';

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let maxAttempts = 100;

    while (headsCount < 5 && attempts <= maxAttempts) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if (attempts <= maxAttempts) {
      resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      reject(`Attempts have exceeded ${maxAttempts} flips.`);
    }
  });
}

fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log("When does this run now?");


function App() {
  return (
    <div className="App">
      <h1>Coin Flipping Assignment</h1>
    </div>
  );
}

export default App;


// **NOTE** I did not complete this assignment, I simply copied the
// solution so that I could study it and have it as a part of my notes!
// This is the Coding Dojo solution, not my own!
