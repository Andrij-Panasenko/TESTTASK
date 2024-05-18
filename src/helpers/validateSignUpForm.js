import * as Yup from 'yup';

const emailPattern =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const validateSignUpForm = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Your name should be longer than two symbols')
        .max(100)
        .required('Please, enter your name'),
    phone: Yup.string()
        .matches(/^[\+]{0,1}380([0-9]{9})$/, '+38 (XXX) XXX - XX - XX')
        .required('Please, enter correct phone number'),
    email: Yup.string()
        .email()
        // .matches(emailPattern)
        .required('Please, enter your email'),
    role: Yup.string()
        .oneOf(['frontend developer', 'backend developer', 'designer', 'qa'])
        .required('Please, select your role'),
});
