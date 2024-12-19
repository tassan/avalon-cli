const { execSync } = require('child_process');

describe('merlin command', () => {
    it('should display a sword and message', () => {
        const output = execSync('node bin/merlin.js').toString();
        expect(output).toContain('Is dangerous to go alone. Take this.');
        expect(output).toContain('O|===|* >________________>');
    });
});
