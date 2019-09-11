import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isTrue {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
