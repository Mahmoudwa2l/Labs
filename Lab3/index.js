// Question 1
function Q1(){
    const currentDate = new Date();
    const localDateTime = currentDate.toLocaleString();
    //document.write(`Current Date and Time: ${localDateTime}`);
    document.getElementById("q1time").textContent = `The Time is ${localDateTime} .`;

}


// Question 2
function Q2(){
    const userEmail = prompt("Enter your Email:");
    if (userEmail.includes("@") && userEmail.indexOf("@") !== 0 && userEmail.indexOf("@") !== userEmail.length - 1) {
        
        document.getElementById("valid").textContent = `The Email is valid.`;
    } else {
        
        document.getElementById("notvalid").textContent = `The Email is not valid.`;
    }
    

}


//Question 3
function charCount(character, inputString) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === character) {
            count++;
        }
    }

    return count;
}

function countCharacter() {
    const userCharacter = document.getElementById("characterInput").value;
    const userInputString = document.getElementById("stringInput").value;

    const result = charCount(userCharacter, userInputString);
    document.getElementById("result").textContent = `Character "${userCharacter}" appears ${result} times in the string.`;
}
console.log(charCount("a", "edabit")); // Output: 1
console.log(charCount("c", "Chamber of secrets")); // Output: 2
console.log(charCount("b", "big fat bubble")); // Output: 4

//------------------------------Question 4-------------------------
// Initial array of student objects

const students = [
    { name: "Ahmed", degree: 95 },
    { name: "mahmoud", degree: 85 },
    { name: "youssef", degree: 60 },
    { name: "mohamed", degree: 70 },
    { name: "mazen", degree: 45 }
];


function heigher(){
const highAchiever = students.find(student => student.degree >= 90 && student.degree <= 100);
document.getElementById("highAchiever").textContent = `The heigher is ${highAchiever.name} , The degree ${highAchiever.degree}.`;
console.log("High Achiever:", highAchiever.name );
}



function lower(){
    const lowAchievers = students.filter(student => student.degree < 60);
    lowach =lowAchievers.map(student => student.name);
    deg =lowAchievers.map(student => student.degree);
    console.log("Low Achievers:", lowach);
    document.getElementById("lowAchiever").textContent = `The Lower is ${lowach} , The degree ${deg}.`;

}




const newStudent = { name: "ali", degree: 80 };
students.push(newStudent);

console.log("Array after adding new student:");
for (const index in students) {
    console.log(students[index]);
}



const removedStudent = students.pop();

console.log("Array after removing last student:");
for (const student of students) {
    console.log(student);
}

students.sort((a, b) => a.name.localeCompare(b.name));
console.log("Array after sorting alphabetically by name:");
console.log(students);




