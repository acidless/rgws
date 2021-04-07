import FieldContainer, { IFieldInfo } from "../../../../../FieldContainer/FieldContainer";
import runValidators from "../../../../../../utils/Validators/runValidators";
import { required } from "../../../../../../utils/Validators/validators";

/*====================*/

const NameField: React.FC<IFieldInfo> = function ({ touched, error }) {
  function validateName(value: string) {
    return runValidators(value, [required]);
  }

  /*====================*/

  return (
    <FieldContainer touched={touched} error={error} validate={validateName} name="name" placeholder="Ваше имя..." />
  );
};

/*====================*/

export default NameField;
