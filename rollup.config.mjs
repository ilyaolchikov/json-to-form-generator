import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: '../nodejs-server/public/json-to-form-generator.min.js',
        format: 'iife',
        name: 'JsonToFormGenerator', // Global variable
    },
    plugins: [
        terser() // Minifies the output
    ],
    watch: {
        include: 'src/**', // Watch all files in the src folder
    },
};
