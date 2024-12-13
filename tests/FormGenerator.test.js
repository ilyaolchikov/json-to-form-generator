// Tests for FormGenerator
import FormGenerator from '../src2/FormGenerator.js';

describe('FormGenerator', () => {
    it('should create a form element', () => {
        const schema = { fields: [], submitText: 'Submit' };
        const formGenerator = new FormGenerator(schema);
        const form = formGenerator.generateForm();
        expect(form.tagName).toBe('FORM');
    });
});
