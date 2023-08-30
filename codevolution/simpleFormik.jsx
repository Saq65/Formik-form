import React from 'react';
import './formik.css'
import { PersonFill } from 'react-bootstrap-icons';
import { useFormik } from 'formik';

export function SimpleFormik() {
    const formik = useFormik({
        initialValues: {
            name: 'saq',
            email: '@',
            Mobile: 0
        },
        onSubmit:values=>{
            console.log('Form data',values)
        }
    })

    //  console.log('form values',formik.values);
    return (
        <div className="container d-flex">
            <form style={{ width: '250px' }} onSubmit={formik.handleSubmit}
                action="#" className='d-flex flex-wrap justify-content-center pt-1 border border-dark rounded' >
                <div id='head' className='d-flex'>
                    <h1 className=''><PersonFill /></h1> <h3 className="text-center mt-2"> Formik-form </h3>
                </div>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th> <label htmlFor="name">Name:</label></th>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" type="text" name="name" id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="email">Email:</label></th>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" type="email" name="email" id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="email">Mobile Number:</label></th>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" type="number" name="Mobile" id="Mobile"
                                    value={formik.values.Mobile}
                                    onChange={formik.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className='btn btn-outline-success w-100 mt-2'>submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div >
    )
}
export default SimpleFormik;