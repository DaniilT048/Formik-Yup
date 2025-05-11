import { useFormik } from 'formik';
import {type ReactElement, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Form = ():ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRepPassword, setShowRepPassword] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repPassword: '',
        },
        onSubmit: (values, {resetForm}) =>{
            console.log("Submitted", values)
            resetForm()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <span onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
            </div>
            <div>
                <label htmlFor="repPassword">Repeat password</label>
                <input
                    type={showRepPassword ? 'text' : 'password'}
                    name="repPassword"
                    onChange={formik.handleChange}
                    value={formik.values.repPassword}
                />
                <span onClick={() => setShowRepPassword(prev => !prev)}>
                    {showRepPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;