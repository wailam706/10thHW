const Manager = require('../lib/Manager');


test("setting office number", () => {
    const testValue = "10";
    const employee = new Manager("Grant", 1, "test@cheese.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Grant", 1, "test@cheese.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})