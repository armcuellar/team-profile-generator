const Engineer = require('../lib/Engineer');

test("Create engineer object", () => {
    const engineer = new Engineer('Armando', '2', 'a@student.com', 'armcuellar');

    expect(engineer.name).toBe('Armando');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('a@student.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('armcuellar')
})
test('function to get role', () => {
    const engineer = new Engineer('Armando', '2', 'a@student.com', 'armcuellar');

    expect(engineer.getRole()).toBe('Engineer')
})
test('function to get github account', () => {
    const engineer = new Engineer('Armando', '2', 'a@student.com', 'armcuellar');

    expect(engineer.getGithub()).toBe('armcuellar')
})