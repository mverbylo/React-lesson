// import React, { Component } from 'react';
// import styles from './SignUpForm.module.scss';

// import { findRenderedComponentWithType } from 'react-dom/test-utils';

// function signUp(userData) {
//   console.log(`${userData.email} ${userData.password} is registared `);
// }
// const initialState = {
//   email: '',
//   password: '',
//   accountLevel: 'spr',
//   isAdult: false,
//   gender: 'female',
// };
// class SignUpForm extends Component {
//   state = {
//     ...initialState,
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     // console.log(e.target.element.email.value);
//     // console.log(e.target.element.password.value);
//     // const { email, password } = this.state;
//     // signUp({ email, password });
//     signUp(this.state);
//     this.setState({ ...initialState });
//   };
//   handleChange = (e) => {
//     const { value, name, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     this.setState({ [name]: newValue });
//   };

//   render() {
//     const { email, password, accountLevel, isAdult, gender } = this.state;
//     return (
// <form className={styles.form} onSubmit={this.submitHandler}>
//   <input
//     className={styles.input}
//     type="email"
//     name="email"
//     value={email}
//     onChange={this.handleChange}
//   />
//   <input
//     className={styles.input}
//     type="password"
//     name="password"
//     value={password}
//     onChange={this.handleChange}
//   />
//   <select
//     className={styles.input}
//     name="accountLevel"
//     value={accountLevel}
//     onChange={this.handleChange}
//   >
//     <option value="bsc">basic</option>
//     <option value="spr">super</option>
//     <option value="pro">pro</option>
//   </select>
//   <label>
//     <input
//       type="checkbox"
//       className={styles.input}
//       checked={isAdult}
//       name="isAdult"
//       onChange={this.handleChange}
//     />
//     Are you an adult?
//   </label>
//   <p>Choose your gender</p>
//   <label>
//     <input
//       type="radio"
//       name="gender"
//       value="male"
//       checked={gender === 'male'}
//       onChange={this.handleChange}
//     />{' '}
//     Male{' '}
//   </label>
//   <label>
//     <input
//       type="radio"
//       name="gender"
//       value="female"
//       checked={gender === 'female'}
//       onChange={this.handleChange}
//     />
//     Female
//   </label>
//   <button disabled={!isAdult} className={styles.btn} type="submit">
//     Sign Up
//   </button>
// </form>
//     );
//   }
// }

// export default SignUpForm;

import styles from './SignUpForm.module.scss';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validators/validationSchema';
import CustomInput from '../CustomInput';
const initialState = {
  email: '',
  password: '',
  gender: 'male',
  isSubscribe: false,
  accountLevel: 'basic',
};

function SignUpForm() {
  const submitHandler = (values, formikBag) => {
    console.log(values);
    // console.log(formikBag);
    // formikBag.resetForm();
  };
  //Formik
  //   return (
  //     <Formik initialValues={initialState} onSubmit={submitHandler}>
  //       {(formikProps) => {
  //         {
  //           /* console.log(formikProps); */
  //         }
  //         return (
  //           <form className={styles.form} onSubmit={formikProps.handleSubmit}>
  //             <input
  //               className={styles.input}
  //               type="email"
  //               name="email"
  //               onChange={formikProps.handleChange}
  //             />
  //             <input
  //               className={styles.input}
  //               type="password"
  //               name="password"
  //               onChange={formikProps.handleChange}
  //             />

  //             <button className={styles.btn} type="submit">
  //               Sign Up
  //             </button>
  //           </form>
  //         );
  //       }}
  //     </Formik>
  //   );
  // }

  return (
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.form}>
        <Field className={styles.input} type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field className={styles.input} type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <label>
          <Field type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <Field type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <Field type="checkbox" name="isSubscribe" />
          Subscribe
        </label>
        <Field as="select" name="accountLevel">
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="max">Maximal</option>
        </Field>
        <CustomInput name="email" labelText="test" />
        <CustomTextInput name="email" labelText="test"></CustomTextInput>
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
export default SignUpForm;

const CustomTextInput = ({
  name,
  multiple,
  value,
  labelText,
  restProps,
}) => {
  const fieldConfig = { name, multiple, value };
  const [field, meta, helpers] = useField(fieldConfig);

  return (
    <div>
      <label>
        {labelText}
        <input className="input" {...field} {...restProps} />
      </label>
      <ErrorMessage className="inputError" name={name} component="div" />
    </div>
  );
};
