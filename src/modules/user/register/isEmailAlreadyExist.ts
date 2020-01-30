import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

import { User } from '../../../entity/User';

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
  async validate(Email: string) {
    const user = await User.findOne({ where: { email: Email } });
    if (user) return false;
    return true;
  }
}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint,
    });
  };
}
