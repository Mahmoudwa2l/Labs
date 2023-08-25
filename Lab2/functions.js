//Question 1

function showWelcome() {
  alert("Welcome to my site");
  var userName = prompt("Please enter your name:");
  var welcomeMessage = "Welcome " + userName;
  document.getElementById("welcomeText").innerText = welcomeMessage;
}

//Question 2
function sumNumbers(a, b) {
  return a + b;
}

//Question 3
function lessThanOrEqualToZero(num) {
  return num <= 0 ? true : false;
}

//Question 4
function checkEligibility(faculty) {
  switch (faculty) {
    case "FCI":
      return "You are eligible to Programming tracks";
    case "Engineering":
      return "You are eligible to Network and Embedded tracks";
    case "Commerce":
      return "You are eligible to ERP and Social media tracks";
    default:
      return "You are eligible to SW fundamentals track";
  }
}

//Question 5
function triArea(base, height) {
  return (base * height) / 2;
  
}



//bonus
function createTable() {
  const tableData = [
    { label: "Name", value: "Ahmed" },
    { label: "Birth year", value: "1981" },
    { label: "Age", value: "30" },
  ];

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (const entry of tableData) {
    const row = table.insertRow();
    const labelCell = row.insertCell(0);
    const valueCell = row.insertCell(1);
    labelCell.textContent = entry.label;
    valueCell.textContent = entry.value;

    labelCell.style.border = "1px solid black";
    valueCell.style.border = "1px solid black";
  }

  document.body.appendChild(table);
}
function writeHeaders() {
  for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>Welcome to my page</h${i}>`);
  }
}
function closeSkill(element) {
    element.parentNode.removeChild(element);
}

function createSkill(skillName) {
    const skillContainer = document.createElement("div");
    skillContainer.classList.add("skill");

    const skillText = document.createElement("span");
    skillText.textContent = skillName;
    skillContainer.appendChild(skillText);

    const closeButton = document.createElement("span");
    closeButton.textContent = "(X)";
    closeButton.classList.add("close");
    closeButton.onclick = () => closeSkill(skillContainer);
    skillContainer.appendChild(closeButton);

    document.getElementById("skillsList").appendChild(skillContainer);
}

// Example usage
createSkill("JavaScript");
createSkill("HTML");
createSkill("CSS");

