class Employee{
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if(!manager) {
            this.manager = null;
        }
    }
}

module.exports = Employee;
