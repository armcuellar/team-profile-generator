const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Armando', '2', 'a@student.com');

    expect(employee.name).toBe('Armando');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('a@student.com');
    expect(employee.role).toBe('Employee');

});
test('function to get name', () => {
    const employee = new Employee('Armando', '2', 'a@student.com');

    expect(employee.getName()).toBe('Armando')
})
test('function to get id', () => {
    const employee = new Employee('Armando', '2', 'a@student.com');

    expect(employee.getId()).toBe('2');
})
test('function to get email', () => {
    const employee = new Employee('Armando', '2', 'a@student.com');

    expect(employee.getEmail()).toBe('a@student.com');
})
test('function to get role', () => {
    const employee = new Employee('Armando', '2', 'a@student.com');

    expect(employee.getRole()).toBe('Employee')
})

