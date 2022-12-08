import * as yup from 'yup';
const EMAIL_SCHEMA = yup.string('Email must be a').email().required();

export const SIGN_UP_SCHEMA = yup.object({
  name: yup
    .string()
    .min(1, 'Name must have at least 1 letter')
    .required('You must enter name'),
  email: EMAIL_SCHEMA,
  password: yup
    .string()
    .matches(/[A-Za-z]{8,}/, 'Password must me 8 symbol or more letters only')
    .required(),
  gender: yup.string().required(),
  isSubscribed: yup.bool(),
  accountLevel: yup.string().required(),
});

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});
// const user1 = {
//   email: 12345,
//   password: 'truepass',
//   lastName: 'Test',
// };

// const user2 = {
//   email: 'test@test.com',
//   password: '1234Test',
//   firstName: 'Test',
//   lastName: 'Null',
// };

// const isValid1 = SIGN_UP_SCHEMA.isValidSync(user1);
// const isValid2 = SIGN_UP_SCHEMA.isValidSync(user2);

// console.log(isValid1);
// console.log(isValid2);

// try {
//   console.log(user1);
//   const validate1 = SIGN_UP_SCHEMA.validateSync(user1, {
//     strict: true,
//     abortEarly: false,
//   });
//   console.log(validate1);
// } catch (error) {
//   console.dir(error);
// }

// try {
//   const validate2 = SIGN_UP_SCHEMA.validateSync(user2, {
//     strict: true,
//     abortEarly: false,
//   });
//   console.log(validate2);
// } catch (error) {
//   console.dir(error);
// }
