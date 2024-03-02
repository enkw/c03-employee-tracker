// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// My instructor Dan wrote this comment:  MUST RETURN ARRAY OF EMPLOYEE DATA

const employeesArray = [];
const collectEmployees = function() {
  let addEmployee = true;
  while (addEmployee) {
    const employeeData = {
      firstName: prompt(`Please enter employee's first name`),
      lastName: prompt(`Please enter employee's last name`),
      salary: parseFloat(prompt(`Please enter employee's salary`))
    };
    // For if the user enters a negative number or letters, prompts them to re-enter the amount
    while (isNaN(employeeData.salary) || employeeData.salary <= 0) {
      alert(`Please enter a valid number`);
      employeeData.salary = parseFloat(prompt(`Please enter employee's salary`));
    }
    // This adds the collected data to the array
    employeesArray.push(employeeData);
    // This portion is for allowing data to be entered for multiple employees
    const addMore = confirm("Would you like to add another?");
    if (!addMore) {
      addEmployee = false;
    } 
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // My instructor Dan wrote this comment:  use a for loop to go through all the objects
  // My instructor Dan wrote this comment:  get salaries from objects
  let totalSalary = 0;
  let numEmployee = employeesArray.length;
  // Loop for determining the total salary of the amounts entered
  for (i = 0; i< employeesArray.length; i++) {
    totalSalary = totalSalary + employeesArray[i].salary;
  }
  // Variable to store the average salary
  const avgSalary = totalSalary/numEmployee;
  console.log(`The average employee salary between our ${employeesArray.length}(s) is ${avgSalary}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // My instructor Dan wrote this comment: don't forget: Math.floor(Math.random()*# of employees)
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to our random drawing winner: `+ randomEmployee.firstName + ` ` + randomEmployee.lastName);
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
