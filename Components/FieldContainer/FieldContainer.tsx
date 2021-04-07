import { Field } from "formik";
import FieldContainerError from "./FieldContainerError/FieldContainerError";

/*====================*/

export type IFieldInfo = {
  error?: string;
  touched?: boolean;
};

type FieldContainerPropsType = IFieldInfo & {
  name?: string;
  value?: any;
  id?: string;
  type?: string;
  placeholder?: string;
  validate?: Function;
  readOnly?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  as?: string;
  rows?: string;
};

/*====================*/

const FieldContainer: React.FC<FieldContainerPropsType> = function ({ innerRef, children, error, touched, ...props }) {
  /*====================*/

  return (
    <div className={`${error && touched ? "error " : ""}${children ? "padding " : ""}relative input-wrapper`}>
      <Field innerRef={innerRef} {...props} />
      {children}
      {error && touched && <FieldContainerError error={error} />}
    </div>
  );
};

/*====================*/

export default FieldContainer;
