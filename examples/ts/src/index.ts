import { ValidationSchema, createFormValidation } from '@lemoncode/fonk';
import { isTrue } from '@lemoncode/fonk-is-true-validator';

const validationSchema: ValidationSchema = {
  field: {
    myField: [isTrue.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('myField', false),
  formValidation.validateField('myField', true),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('myField', false)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('myField', true)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
