import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2)
        .required('Please enter your name'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(8, 'Password should be at least 8 symbols')
        .matches(passwordRules, 'Password should be at least 8 sym, 1 upper, 1 lower, 1 num')
        .required('Please enter your password'),
    repPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Repeat passwords must match')
        .required('Repeat password is required'),
})

