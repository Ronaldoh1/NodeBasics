var grades = [100, 50, 75];
// grades.push(79);
// grades.push(89);

// console.log(grades);


// grades.forEach(function (grades) {

// 	console.log(grades);

// })

var totalScore = 0;

grades.forEach(function (grade){


	totalScore = totalScore + grade;

	console.log('Current Total is ' + totalScore);
})

var average = totalScore / grades.length; 

console.log('The averare is ' + average);
