import { Field, ErrorMessage } from 'formik';
const CustomInput = ({ name, labelText, restProps }) => {
  return (
    <div>
      <label>
        {labelText}
        <Field className="input" name={name} {...restProps} />
      </label>
      <ErrorMessage className="inputError" name="email" component="div" />
    </div>
  );
};

export default CustomInput;
