import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [toQuestions, setToQuestions] = useState(false);
    const initialValues = {
        email: 'ssppagrawal@gmail.com',
        password: 'password'
    };

    const onSubmit = values => {setToQuestions(true)}
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required().min(8, 'Password is too short - should be 8 chars minimum.')
      });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    return(
        <div className="container">
            {toQuestions? <Redirect to = "/questions" />: null}
            <div className="my-5">
                <center><img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Stackoverflow icon" className="login-img"/></center>
                <form className="login-form box box-shadow white-background black-text" onSubmit = {formik.handleSubmit}>
                    <div className="form-group">
                        <p className="form-label">Email:</p>
                        <input type="email" className="form-control" name = 'email' value={formik.values.email} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email ? <div className = 'error'> {formik.errors.email}</div> : null }
                    </div>
                    <div className="form-group">
                        <p className="form-label">Password:</p>
                        <input type="password" className="form-control" name = 'password' value={formik.values.password} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
                        {formik.touched.password && formik.errors.password ? <div className = 'error'> {formik.errors.password}</div> : null }
                    </div>
                    <div className="form-group">
                        <p>Don’t have an account?</p>
                        <input type="submit" value="Login" className="form-control btn blue-background white-text"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login