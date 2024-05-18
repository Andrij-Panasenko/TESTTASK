import React from 'react';
import '../../css/_variables.scss';
import '../../css/signUp/signup-mobile.scss';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';
import { validateSignUpForm } from '../../helpers/validateSignUpForm.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const SighUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validateSignUpForm),
        defaultValues: {
            name: '',
            email: '',
            // phone: '+380',
        },
    });

    console.log('errors', errors);

    const submitForm = (data) => {
        console.log(data);
    };

    return (
        <>
            <section className="signup-section">
                <div className="container">
                    <SectionTitle
                        title="Working with POST request"
                        tag="h2"
                        className="signup-title"
                    />
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="sighup-input-text-wrapp">
                            <div className="signup-inputs-wrapp">
                                <input
                                    className={`signup-input-text ${
                                        errors.name ? 'error-input' : ''
                                    }`}
                                    type="text"
                                    placeholder="Your name"
                                    aria-invalid={errors.name ? true : false}
                                    {...register('name')}
                                />
                                {errors.name && (
                                    <p className="signup-alert" role="alert">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="signup-inputs-wrapp">
                                <input
                                    className={`signup-input-text ${
                                        errors.email ? 'error-input' : ''
                                    }`}
                                    type="email"
                                    placeholder="Email"
                                    aria-invalid={errors.email ? true : false}
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <p className="signup-alert" role="alert">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="signup-inputs-wrapp">
                                <input
                                    className={`signup-input-text ${
                                        errors.phone ? 'error-input' : ''
                                    }`}
                                    type="tel"
                                    placeholder="Phone"
                                    aria-invalid={errors.phone ? true : false}
                                    {...register('phone')}
                                />
                                {errors.phone && (
                                    <p className="signup-alert" role="alert">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="signup-position-wrapp">
                            <p className="signup-position-title">
                                Select your position
                            </p>

                            <div>
                                <input
                                    className="visually-hidden signup-input-position"
                                    aria-invalid={errors.name ? true : false}
                                    id="frontend"
                                    type="radio"
                                    value="frontend developer"
                                    {...register('role')}
                                />
                                <label
                                    className="signup-input-position-label"
                                    htmlFor="frontend"
                                >
                                    <span className="custom-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    Frontend developer
                                </label>
                            </div>
                            <div>
                                <input
                                    className="visually-hidden signup-input-position"
                                    aria-invalid={errors.name ? true : false}
                                    id="backend"
                                    type="radio"
                                    value="backend developer"
                                    {...register('role')}
                                />
                                <label
                                    className="signup-input-position-label"
                                    htmlFor="backend"
                                >
                                    <span className="custom-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    Backend developer
                                </label>
                            </div>
                            <div>
                                <input
                                    className="visually-hidden signup-input-position"
                                    aria-invalid={errors.name ? true : false}
                                    id="designer"
                                    type="radio"
                                    value="designer"
                                    {...register('role')}
                                />
                                <label
                                    className="signup-input-position-label"
                                    htmlFor="designer"
                                >
                                    <span className="custom-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    Designer
                                </label>
                            </div>
                            <div>
                                <input
                                    className="visually-hidden signup-input-position"
                                    aria-invalid={errors.name ? true : false}
                                    id="qa"
                                    type="radio"
                                    value="qa"
                                    {...register('role')}
                                />
                                <label
                                    className="signup-input-position-label"
                                    htmlFor="qa"
                                >
                                    <span className="custom-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    QA
                                </label>
                            </div>
                            {errors.role && (
                                <p
                                    className="signup-position-alert"
                                    role="alert"
                                >
                                    {errors.role.message}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <input
                                className="signup-input"
                                type="file"
                                placeholder="Upload your photo"
                            /> */}
                        </div>
                        <PrimaryButton
                            name="Sign up"
                            type="submit"
                            // className="signup-submit-btn"
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

//   <Formik
//       initialValues={{
//           name: '',
//           email: '',
//           phone: '',
//       }}
//       validationSchema={validateSignUpForm}
//       onSubmit={(values, actions) => {
//           console.log(values);
//           actions.resetForm();
//       }}
//   >
//       <Form>
//           <Field name="name" type="text" placeholder="Your name" />
//           <ErrorMessage name="name" component="span" />

//           <Field name="email" type="email" placeholder="Email" />
//           <ErrorMessage name="email" component="span" />

//           <Field name="phone" type="tel" placeholder="Phone" />
//           <ErrorMessage name="phone" component="span" />

//           <button type="submit">Sigh up</button>
//       </Form>
//   </Formik>;
