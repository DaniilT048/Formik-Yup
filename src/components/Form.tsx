import { useFormik } from 'formik';
import type {ReactElement} from "react";

const Form = ():ReactElement => {
    const formik = useFormik({
        initialValues: {name: '', email: '', password: ''},
        onSubmit: (values) => console.log("Submitted", values)
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;