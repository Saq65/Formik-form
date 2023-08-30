import React from "react";
import { useFormik } from "formik";
import { PersonFill } from "react-bootstrap-icons";
import './formik.css'

const initialValues = {
    name: 'saq',
    email: 'email',
    Mobile: 0
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {

    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    }

    if (!values.Mobile) {
        errors.Mobile = 'Required'
    }
    return errors
}


export function FormValidation() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate

    })

    console.log('form errors', formik.errors);

    return (
        <div className="container-fluid">
            <div className="container d-flex">
                <form style={{ width: '250px' }} onSubmit={formik.handleSubmit}
                    action="#" className='d-flex flex-wrap  pt-1 border border-dark rounded' >
                    <div id='head' className='d-flex'>
                        <h1 className='text-center'><PersonFill /></h1> <h3 className="text-center mt-2"> Formik-form </h3>
                    </div>
                    <label htmlFor="name">Name:</label>
                    <div className="form-control">

                        <input className="form-control" type="text" name="name" id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />

                        {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                    </div>

                    <label htmlFor="email">Email:</label>
                    <div className="form-control">

                        <input className="form-control" type="email" name="email" id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

                    </div>
                    <label htmlFor="email">Mobile Number:</label>
                    <div className="form-control">
                        <input className="form-control" type="number" name="Mobile" id="Mobile"
                            value={formik.values.Mobile}
                            onChange={formik.handleChange}
                        />

                        {formik.errors.Mobile ? <div style={{ color: 'red' }}>{formik.errors.Mobile}</div> : null}
                    </div>

                    <button className='btn btn-outline-success w-100 mt-2'>submit</button>

                </form>
            </div >
        </div>
    )
}

export default FormValidation;