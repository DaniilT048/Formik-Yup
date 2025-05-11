import { useFormik } from 'formik';
import type {ReactElement} from "react";

const Form = ():ReactElement => {
    const formik = useFormik({
        initialValues: {name: '', email: '', password: ''},
        onSubmit: values => {
            console.log("Submitted", values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>

        </form>
    );
};

export default Form;