// Select field class
import BaseField from './BaseField.js';

export default class SelectField extends BaseField {
    createInput() {
        const wrapper = document.createElement('div');
        const select = document.createElement('select');
        select.name = this.field.name;
        if (this.field.options) {
            this.field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.label;
                select.appendChild(opt);
            });
        }
        wrapper.appendChild(select);
        this.applyCommonAttributes(wrapper);
        return wrapper;
    }
}
