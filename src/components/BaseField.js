// Abstract base class for form elements
export default class BaseField {
    static NO_LABEL_TYPES = ['checkbox', 'radio'];
    constructor(field) {
        this.field = field;
    }

    createLabel() {
        if (!this.field.label || BaseField.NO_LABEL_TYPES.includes(this.field.type)) return '';
        const label = document.createElement('label');
        label.textContent = this.field.label;
        label.htmlFor = this.field.name;
        return label;
    }

    createInput() {
        throw new Error('createInput() must be implemented in subclasses');
    }

    applyCommonAttributes(element) {
        if (this.field.cssClasses) element.className = this.field.cssClasses;
        if (this.field.id) element.id = this.field.id;
    }
}
