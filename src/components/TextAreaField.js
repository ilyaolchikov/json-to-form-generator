// Textarea field class
import BaseField from './BaseField.js';

export default class TextAreaField extends BaseField {
    createInput() {
        const wrapper = document.createElement('div');
        const textarea = document.createElement('textarea');
        textarea.name = this.field.name;
        if (this.field.placeholder) textarea.placeholder = this.field.placeholder;
        if (this.field.required) textarea.required = true;
        wrapper.appendChild(textarea);
        this.applyCommonAttributes(wrapper);
        return wrapper;
    }
}
