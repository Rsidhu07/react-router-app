export const initialState = {
  formData: {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Your password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 8
      },
      valid: false,
      touched: false
    },

    email: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Registered Email '
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false
    },
  },
  isValidForm: false
};
