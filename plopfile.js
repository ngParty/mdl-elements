module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create component sceleton',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is component name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'packages/{{dashCase name}}/package.json',
            templateFile: 'tools/templates/component/package.json'
        },{
            type: 'add',
            path: 'packages/{{dashCase name}}/LICENSE',
            templateFile: 'tools/templates/component/LICENSE'
        },{
            type: 'add',
            path: 'packages/{{dashCase name}}/.npmrc',
            templateFile: 'tools/templates/component/.npmrc'
        },
        {
            type: 'add',
            path: 'packages/{{dashCase name}}/src/index.ts',
            templateFile: 'tools/templates/component/src/index.ts'
        },
        {
            type: 'add',
            path: 'packages/{{dashCase name}}/src/{{camelCase name}}.ts',
            templateFile: 'tools/templates/component/src/Element.tsx'
        }]
    });
};
