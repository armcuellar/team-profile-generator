const Intern = require('../lib/Intern');

test("Create intern object", () => {
    const intern = new Intern('Armando', '2', 'a@student.com', 'New School');

    expect(intern.name).toBe('Armando');
    expect(intern.id).toBe('2');
    expect(intern.email).toBe('a@student.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('New School')
})
test('function to get role', () => {
    const intern = new Intern('Armando', '2', 'a@student.com', 'New School');

    expect(intern.getRole()).toBe('Intern')
})
test('function to get school', () => {
    const intern = new Intern('Armando', '2', 'a@student.com', 'New School');

    expect(intern.getSchool()).toBe('New School')
})
