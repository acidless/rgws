import FieldContainer, { IFieldInfo } from "../../../../../FieldContainer/FieldContainer";
import runValidators from "../../../../../../utils/Validators/runValidators";
import { maxLength, required } from "../../../../../../utils/Validators/validators";

/*====================*/

const MessageField: React.FC<IFieldInfo> = function ({ touched, error }) {
  function validateMessage(value: string) {
    return runValidators(value, [required, maxLength(1000)]);
  }

  return (
    <FieldContainer rows="5" as="textarea" validate={validateMessage} name="message" error={error} touched={touched} />
  );
};

/*====================*/

export default MessageField;
