import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
  password: yup
    .string()
    .min(8, "Password must be 8 Characters long.")
    .required('Password is required.'),
  // termsOfService: yup
  //   .string()
  //   .oneOf(['accept', 'declined'], "accept is required"),
  termsOfService: yup.object().shape({
    accept: yup.boolean(),
    decline: yup.boolean()
  }).test('tosValidate', null, (obj) => {
    if (obj.accept === true) {
      return true
    }
  })
})

export default schema