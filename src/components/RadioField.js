// Checkbox field class
import BaseField from './BaseField.js';

export default class RadioField extends BaseField {
    createInput() {
        const wrapper = document.createElement('div');
        this.applyCommonAttributes(wrapper);

        const label = document.createElement('label');
        label.textContent = this.field.label || this.field.name;

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = this.field.name;
        input.value = this.field.value || '';

        label.appendChild(input);
        wrapper.appendChild(label);

        return wrapper;
    }
}
