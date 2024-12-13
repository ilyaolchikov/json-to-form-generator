// Schema validation logic
export default function validateSchema(schema) {
    if (!schema.fields || !Array.isArray(schema.fields)) {
        throw new Error('Schema must have a "fields" array');
    }
    schema.fields.forEach(field => {
        if (!field.name || !field.type) {
            throw new Error('Each field must have a "name" and "type"');
        }
    });
}