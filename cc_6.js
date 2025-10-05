// Step 1 
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  describe() {
    return `${this.name} works in ${this.department}.`;
  }
}

// Step 2
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }
  describe() {
    return `${this.name} manages ${this.department} (team of ${this.teamSize}).`;
  }
}

// Step 4
class Company {
  constructor() {
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  listEmployees() {
    for (const e of this.employees) {
      console.log(e.describe());
    }
  }
}