// Scores

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// How many of each type

var a = 1;
var b = 1;
var c = 1;
var d = 1;
var f = 1;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    var totalA = "The amount of A's are " + a++;
  } else if (scores[i] > 80) {
    var totalB = "The amount of B's are " + b++;
  } else if (scores[i] > 70) {
    var totalC = "The amount of C's are " + c++;
  } else if (scores[i] > 60) {
    var totalD = "The amount of D's are " + d++;
  } else if (scores[i] > 50) {
    var totalF = "The amount of F's are " + f++;
  }
}

console.log(totalA);
console.log(totalB);
console.log(totalC);
console.log(totalD);
console.log(totalF);

// Lowest Grade

var min = Math.min(...scores);
console.log("Lowest score is:", min);

// Highest Grade

var max = Math.max(...scores);
console.log("Highest score is:", max);
