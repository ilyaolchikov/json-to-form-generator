# JSON-to-Form Generator

**JSON-to-Form Generator** is a lightweight JavaScript library designed to dynamically generate HTML forms from a JSON schema. 
It simplifies the process of creating forms with various input types, validation, styling, and reusable components, making it ideal for both small projects and enterprise-level applications.

---

## Features

- **Dynamic Form Generation**: Automatically create forms based on a JSON schema.
- **Support for Multiple Input Types**: Includes support for text inputs, checkboxes, dropdowns, text areas, and more.
- **Built-in Validation**: Easily enforce required fields and add validation messages.
- **Custom CSS Classes and IDs**: Customize form elements by adding specific CSS classes and IDs for styling.
- **Reusable Components**: Modular architecture allows easy extension to add new input types.
- **Lightweight and Fast**: No external dependencies, making it easy to integrate.

---

## Installation

Clone the repository and include the library in your project:

```bash
# Clone the repository
git clone https://github.com/ilyaolchikov/json-to-form-generator.git

# Navigate to the project directory
cd json-to-form-generator

# Install dependencies
npm install

# Build the library
npm run build
```

Alternatively, you can include the pre-built library in your project:

```html
<script src="dist/json-to-form-generator.min.js"></script>
```

---

## Usage

### Example Schema

Here’s an example schema to generate a form:

```javascript
const schema = {
  fields: [
    { name: "email", type: "email", required: true, placeholder: "Enter email", label: "Email", cssClasses: "input-email", id: "email-id" },
    { name: "password", type: "password", required: true, placeholder: "Enter password", label: "Password", cssClasses: "input-password", id: "password-id" },
    { name: "age", type: "number", placeholder: "Enter age", label: "Age", cssClasses: "input-age", id: "age-id" },
    { name: "country", type: "select", label: "Contry", options: [{ value: "usa", label: "USA" }, { value: "canada", label: "Canada" }], cssClasses: "input-gender", id: "gender-id" },
    { name: "subscribe", type: "checkbox", label: "Subscribe", cssClasses: "input-checkbox", id: "subscribe" },
    { name: "subscribe", type: "checkbox", label: "Subscribe", cssClasses: "input-checkbox", id: "subscribe2" },
    { name: "gender", type: "radio", label: "Male", cssClasses: "input-radio", id: "subscribe3" },
    { name: "gender", type: "radio", label: "Female", cssClasses: "input-radio", id: "subscribe4" }
  ],
  submitText: "Register"
};;
```

### Generate the Form

Import the library and generate the form:

```javascript
import FormGenerator from './src/index.js';

const formGenerator = new FormGenerator(schema);
const form = formGenerator.generateForm();

document.body.appendChild(form);
```

---

## Folder Structure

```
json-to-form-generator/
├── src/                        # Source code
│   ├── components/             # Individual form components
│   │   ├── BaseField.js        # Abstract base class for form elements
│   │   ├── InputField.js       # Input field class
│   │   ├── TextAreaField.js    # Textarea field class
│   │   ├── SelectField.js      # Select field class
│   │   ├── CheckboxField.js    # Checkbox field class
│   │   ├── RadioField.js       # Radio field class
│   │   └── index.js            # Barrel file to export all components
│   ├── FormGenerator.js        # Main form generator class
│   ├── index.js                # Entry point for the library
├── dist/                       # Bundled files for distribution
├── examples/                   # Example projects or usage demos
├── tests/                      # Unit and integration tests
├── .gitignore                  # Files to ignore in git
├── package.json                # npm package metadata
├── rollup.config.mjs           # Build configuration
├── LICENSE                     # License file
└── README.md                   # Documentation
```

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-name`).
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Future Improvements

- Add support for advanced input types (e.g., date pickers, file uploads).
- Extend validation options (e.g., regex validation).
- Internationalization support for multi-language forms.

---

## Contact

For questions or feedback, please create an issue in the [GitHub repository](https://github.com/ilyaolchikov/json-to-form-generator/issues).
