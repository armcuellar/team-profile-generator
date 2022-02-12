const Manager = require('../lib/manager');

test("Create manager object", () => {
    const manager = new Manager('Armando', '2', 'a@student.com', '111-222-3333');

    expect(manager.name).toBe('Armando');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('a@student.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe('111-222-3333')
})
test('function to get role', () => {
    const manager = new Manager('Armando', '2', 'a@student.com', '111-222-3333');

    expect(manager.getRole()).toBe('Manager')
})

