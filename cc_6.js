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

// Step 3 + 5
const justin = new Employee("Justin Kluivert", "Striker");
const luis = new Employee("Luis Suarez", "False Nine");
const david = new Manager("David Beckham", "Engine", 6);
const leo = new Manager("Leo Messi", "Creator", 4);

const fifa = new Company();
fifa.addEmployee(alice);
fifa.addEmployee(bob);
fifa.addEmployee(maya);
fifa.addEmployee(leo);

fifa.listEmployees();

