// Input field class
import BaseField from './BaseField.js';

export default class InputField extends BaseField {
    createInput() {
        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        input.type = this.field.type;
        input.name = this.field.name;
        if (this.field.placeholder) input.placeholder = this.field.placeholder;
        if (this.field.required) input.required = true;
        if (this.field.value) input.value = this.field.value;
        wrapper.appendChild(input);
        this.applyCommonAttributes(wrapper);
        return wrapper;
    }
}
