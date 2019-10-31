# fonk-is-true-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-is-true-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-is-true-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-is-true-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-is-true-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-is-true-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-is-true-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is strictly true

How to install it:

```bash
npm install @lemoncode/fonk-is-true-validator --save
```

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
  acceptedTerms: true
}
```

We can add a isTrue validation to the myFormValues

```javascript
import { isTrue } from '@lemoncode/fonk-is-true-validator';

const validationSchema = {
  field: {
    acceptedTerms: [isTrue.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { isTrue } from '@lemoncode/fonk-is-true-validator';

isTrue.setErrorMessage('Debe aceptar los términos y condiciones');
```

- Locally just override the error message for this validationSchema:

```javascript
import { isTrue } from '@lemoncode/fonk-is-true-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: isTrue.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
