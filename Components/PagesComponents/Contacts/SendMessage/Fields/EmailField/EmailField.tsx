import FieldContainer, { IFieldInfo } from "../../../../../FieldContainer/FieldContainer";
import runValidators from "../../../../../../utils/Validators/runValidators";
import { required } from "../../../../../../utils/Validators/validators";

/*====================*/

const EmailField: React.FC<IFieldInfo> = function ({ touched, error }) {
  function validateEmail(value: string) {
    return runValidators(value, [required]);
  }

  return (
    <FieldContainer
      placeholder="Ваш email..."
      validate={validateEmail}
      type="email"
      name="email"
      touched={touched}
      error={error}
    />
  );
};

/*====================*/

export default EmailField;
