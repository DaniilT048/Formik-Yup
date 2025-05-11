import { useFormik } from 'formik';
import {type ReactElement, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {formSchema} from "../schemas/formSchema.ts";



const Form = ():ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRepPassword, setShowRepPassword] = useState<boolean>(false);

    const { values, errors, touched, handleSubmit, handleChange,} = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repPassword: '',
        },
        onSubmit: (values,  {resetForm}) =>{
            console.log("Submitted", values)
            resetForm()
        },
        validationSchema: formSchema

    })
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    className={errors.name && touched.name ? 'input-error' : ''}
                />
                {errors.name && touched.name && <div className="error">{errors.name}</div>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className={errors.email && touched.email ? 'input-error' : ''}
                />
                {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className={errors.password && touched.password ? 'input-error' : ''}
                />
                <span onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
                {errors.password && touched.password && <div className="error">{errors.password}</div>}
            </div>
            <div>
                <label htmlFor="repPassword">Repeat password</label>
                <input
                    type={showRepPassword ? 'text' : 'password'}
                    name="repPassword"
                    onChange={handleChange}
                    value={values.repPassword}
                    className={errors.repPassword && touched.repPassword ? 'input-error' : ''}
                />
                <span onClick={() => setShowRepPassword(prev => !prev)}>
                    {showRepPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
                {errors.repPassword && touched.repPassword && <div className="error">{errors.repPassword}</div>}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;