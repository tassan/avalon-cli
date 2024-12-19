const { execSync } = require('child_process');

describe('hello command', () => {
    it('should output a hello message for Avalon CMS', () => {
        const output = execSync('node bin/hello.js').toString();
        expect(output).toContain('Hello! Welcome to Avalon CMS.');
        expect(output).toContain('Avalon CMS is a simple, lightweight, and flexible static blog generator.');
    });
});
