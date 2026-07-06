// day1-objects.js

const employees = [
  {
    id: 101,
    name: "Mahesh",
    department: "QA",
    salary: 80000,
  },
  {
    id: 102,
    name: "Ravi",
    department: "Developer",
    salary: 90000,
  },
  {
    id: 103,
    name: "John",
    department: "QA",
    salary: 70000,
  },
  {
    id: 104,
    name: "Priya",
    department: "HR",
    salary: 60000,
  },
  {
    id: 105,
    name: "Suresh",
    department: "QA",
    salary: 95000,
  },
];

console.log("========================================");
console.log("1. Print All Employee Names");
console.log("========================================");

employees.forEach((employee) => {
  console.log(employee.name);
});

console.log("\n========================================");
console.log("2. Print Only QA Employees");
console.log("========================================");

const qaEmployees = employees.filter(
  (employee) => employee.department === "QA",
);

console.log(qaEmployees);

console.log("\n========================================");
console.log("3. Print Developer Employees");
console.log("========================================");

const developers = employees.filter(
  (employee) => employee.department === "Developer",
);

console.log(developers);

console.log("\n========================================");
console.log("4. Highest Salary");
console.log("========================================");

const highestSalary = employees.reduce((highest, employee) =>
  employee.salary > highest.salary ? employee : highest,
);

console.log(highestSalary);

console.log("\n========================================");
console.log("5. Lowest Salary");
console.log("========================================");

const lowestSalary = employees.reduce((lowest, employee) =>
  employee.salary < lowest.salary ? employee : lowest,
);

console.log(lowestSalary);

console.log("\n========================================");
console.log("6. Increase Salary by 10%");
console.log("========================================");

const increasedSalary = employees.map((employee) => ({
  ...employee,
  salary: employee.salary * 1.1,
}));

console.log(increasedSalary);

console.log("\n========================================");
console.log("7. Total Salary");
console.log("========================================");

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0,
);

console.log("Total Salary =", totalSalary);

console.log("\n========================================");
console.log("8. Average Salary");
console.log("========================================");

const averageSalary = totalSalary / employees.length;

console.log("Average Salary =", averageSalary);

console.log("\n========================================");
console.log("9. Sort Salary Ascending");
console.log("========================================");

const ascending = [...employees].sort(
  (a, b) => a.salary - b.salary,
);

console.log(ascending);

console.log("\n========================================");
console.log("10. Sort Salary Descending");
console.log("========================================");

const descending = [...employees].sort(
  (a, b) => b.salary - a.salary,
);

console.log(descending);

console.log("\n========================================");
console.log("11. Find Employee By ID");
console.log("========================================");

const employeeById = employees.find(
  (employee) => employee.id === 101,
);

console.log(employeeById);

console.log("\n========================================");
console.log("12. Find Employee By Name");
console.log("========================================");

const employeeByName = employees.find(
  (employee) => employee.name === "Mahesh",
);

console.log(employeeByName);

console.log("\n========================================");
console.log("13. Count QA Employees");
console.log("========================================");

const qaCount = employees.filter(
  (employee) => employee.department === "QA",
).length;

console.log("QA Employees =", qaCount);

console.log("\n========================================");
console.log("14. Employees Salary > 80000");
console.log("========================================");

const highSalaryEmployees = employees.filter(
  (employee) => employee.salary > 80000,
);

console.log(highSalaryEmployees);

console.log("\n========================================");
console.log("15. Convert Array To Object");
console.log("========================================");

const employeeObject = employees.reduce((obj, employee) => {
  obj[employee.id] = employee.name;
  return obj;
}, {});

console.log(employeeObject);

console.log("\n========================================");
console.log("BONUS - Get Employee By Department");
console.log("========================================");

function getEmployeeByDepartment(department) {
  return employees.filter(
    (employee) => employee.department === department,
  );
}

console.log(getEmployeeByDepartment("QA"));

console.log("\n========================================");
console.log("BONUS - Highest Paid QA Employee");
console.log("========================================");

const highestQA = employees
  .filter((employee) => employee.department === "QA")
  .reduce((highest, employee) =>
    employee.salary > highest.salary ? employee : highest,
  );

console.log(highestQA);

console.log("\n========================================");
console.log("BONUS - Total Salary By Department");
console.log("========================================");

const departmentSalary = employees.reduce((result, employee) => {
  result[employee.department] =
    (result[employee.department] || 0) + employee.salary;

  return result;
}, {});

console.log(departmentSalary);

console.log("\n========================================");
console.log("BONUS - Employee Names Only");
console.log("========================================");

const employeeNames = employees.map(
  (employee) => employee.name,
);

console.log(employeeNames);

console.log("\n========================================");
console.log("BONUS - Employee IDs Only");
console.log("========================================");

const employeeIds = employees.map(
  (employee) => employee.id,
);

console.log(employeeIds);