import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import { useFormik } from 'formik';
import { connect, shallowEqual, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as ChatActions from '../store/actions/chatActions';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';

export function Login(props: any) {
    const socket = useSelector(
        ({ chat }: any) => chat.socket,
        shallowEqual
    )
    const token = useSelector(
        ({ auth }: any) => auth.token,
        shallowEqual
    )
    useEffect(() => {
        if (token) {
            console.log("Redirect to root");
            window.location.href = ("/")
        }
    }, [token])
    const openNotification = (name: any) => {
        notification.warning({
            message: `Lost Connection`,
            description: `${name}! \n unfortunately your connection was interrupted, Please check your connection`,
            placement: 'bottomRight',

        });
    };

    const validation = yup.object().shape({
        email: yup.string()
            .required("Your user name is required"),
        // .min(5, "Your user name must be at least 5 characters"),
        password: yup.string()
            .required("Your password is required")
        // disable for test
        // .min(8, "Your password must be at least 8 characters")
        // .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // ),
        // email: yup.string()
        //     .required("Your email is required")
        //     .email("Invalid email"),
    });

    const formik = useFormik({
        validationSchema: validation,
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, { setSubmitting }) => {
            console.log("onSubmit", values);
            if (socket) {
                socket.send(JSON.stringify({
                    type: "LOGIN",
                    data: values
                }))
            } else {
                console.log("no socket", socket);
                openNotification("Dear User")
            }
            setSubmitting(false)
        }
    });
    useEffect(() => {
        console.log(formik.values)
        console.log(formik.errors)
    }, [formik])
    return (
        <div className='w-full h-full form-wrapprt'>
            <div className="w-full mx-auto py-10 max-w-xs">

                <h1 className="text-2xl font-bold text-center ">
                    Welcome back to {" "}
                    <span className='whitespace-nowrap text-2xl font-bold text-center text-amber-500'>
                        Hober Chat {" "}
                    </span>
                </h1>

                <h2 className="text-2xl text-center">Login</h2>
                <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input name="email" defaultValue={formik.values.email} onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input name="password" defaultValue={formik.values.password} onChange={formik.handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={formik.isSubmitting} type="submit" className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Log In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <p className='text-center mt-10 '>
                        Don't have an account? <Link to='/signup'>Sign in</Link>
                    </p>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; 2022 <a href="https://hosseinhosseini.net/">
                        Seyed Hossein Hosseini. </a> All rights reserved.
                </p>
            </div>

        </div>
    )
}

const mapStateToProps = (state: any) => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = (dispatch: any) => ({
    setupSocket: () => dispatch(ChatActions.setupSocket()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));