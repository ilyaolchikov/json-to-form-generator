// Main form generator class
import { InputField, TextAreaField, SelectField, CheckboxField } from './components/index.js';
import RadioField from './components/RadioField';

export default class FormGenerator {
    constructor(schema) {
        this.schema = schema;
    }

    createField(field) {
        switch (field.type) {
            case 'textarea':
                return new TextAreaField(field);
            case 'select':
                return new SelectField(field);
            case 'checkbox':
                return new CheckboxField(field);
            case 'radio':
                return new RadioField(field);
            default:
                return new InputField(field);
        }
    }

    generateForm() {
        const form = document.createElement('form');

        this.schema.fields.forEach(field => {
            const fieldElement = this.createField(field);
            const fieldWrapper = fieldElement.createInput();
            if (fieldElement.createLabel) {
                fieldWrapper.prepend(fieldElement.createLabel());
            }
            form.appendChild(fieldWrapper);
        });

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = this.schema.submitText || 'Submit';
        form.appendChild(submitButton);

        return form;
    }
}
