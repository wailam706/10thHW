const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Grant"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    // expect(employee.id).toBe(name);
});
test('Set ID', () => {
    const testId = 100;
    const employee = new Employee("Grant", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "grant@cheese.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "Grant"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "100"
    const employee = new Employee("Grant", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "grant@cheese.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Grant", 1, "grant@cheese.com");
    expect(employee.getRole()).toBe(testRole);
});
