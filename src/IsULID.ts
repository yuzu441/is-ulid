import {buildMessage, ValidateBy, ValidationOptions} from 'class-validator'

export const IS_ULID = 'isUlid'

const pattern = /[0-9A-HJKMNP-TV-Z]{26}/

export function isULID(value: unknown): boolean {
  return typeof value === 'string' && pattern.test(value)
}

export function IsULID(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy({
    name: IS_ULID,
    validator: {
      validate: (value: string): boolean => isULID(value),
      defaultMessage: buildMessage(
        (eachPrefix) => eachPrefix + '$property must be an ULID',
        validationOptions
      ),
    },
  }, validationOptions)
}
