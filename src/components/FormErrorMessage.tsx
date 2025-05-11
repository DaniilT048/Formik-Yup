import {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {formSchema} from "../schemas/formSchema.ts";


const FormErrorMessage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepPassword, setShowRepPassword] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        repPassword: '',
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleSubmit}>
            {({errors, touched}) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field
                            name="name"
                            type="text"
                            className={errors.name && touched.name ? 'input-error' : ''}/>
                        <ErrorMessage name="name" component="div" className="error"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            type="email"
                            className={errors.email && touched.email ? 'input-error' : ''}/>
                        <ErrorMessage name="email" component="div" className="error"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                            <Field
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className={errors.password && touched.password ? 'input-error' : ''}/>
                            <span
                                onClick={() => setShowPassword(prev => !prev)}>
                                {showPassword ? <FaEye/> : <FaEyeSlash/>}
                            </span>
                        <ErrorMessage name="password" component="div" className="error"/>
                    </div>
                    <div>
                        <label htmlFor="repPassword">Repeat password</label>
                            <Field
                                name="repPassword"
                                type={showRepPassword ? 'text' : 'password'}
                                className={errors.repPassword && touched.repPassword ? 'input-error' : ''}
                            />
                            <span
                                onClick={() => setShowRepPassword(prev => !prev)}>
                                {showRepPassword ? <FaEye/> : <FaEyeSlash/>}
                            </span>
                        <ErrorMessage name="repPassword" component="div" className="error"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormErrorMessage;