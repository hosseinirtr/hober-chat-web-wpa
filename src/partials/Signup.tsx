import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import MinimalInput from '../components/Input/MinimalTextInput';
import * as ChatActions from '../store/actions/chatActions';

export function Signup(props: any) {

    const validation = Yup.object().shape({
        firstName: Yup.string()
            .required("Your first name is required")
            .min(3, "Your name must be at least 3 characters"),
        lastName: Yup.string()
            .required("Your last name is required")
            .min(3, "Your name must be at least 3 characters"),
        userName: Yup.string()
            .required("Your user name is required")
            .min(5, "Your user name must be at least 5 characters"),
        email: Yup.string()
            .required("Your email is required")
            .email("Invalid email"),
        password: Yup.string()
            .required("Your password is required")
            .min(8, "Your password must be at least 8 characters")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        // phoneNumber: Yup.string()
        // .required("Your phone number is required")
        // .matches(/^\d{9}$/, "Phone number must be 10 digits")
    });

    const formik = useFormik({
        validationSchema: validation,
        initialValues: {
            firstName: 'Seyed Hossein',
            lastName: 'Hosseini',
            userName: 'hosseinrtr',
            email: 'me@hosseinhosseini.net',
            password: 'aA1!aA1!aA1!aA1!aA1!',
            phoneNumber: '',
        },
        onSubmit: values => {
            console.log("signup values: \n", values);
            console.log("props: \n", props);
            if (props.socket) {
                props.socket.send(JSON.stringify({
                    type: "SIGNUP",
                    data: values
                }))
            } else {
                console.log("no socket");
            }
        }
    });

    useEffect(() => {
        console.log("props: \n", props);
        console.log("formik: \n", formik.errors);
        console.log("formik.values: \n", formik.values);
    }, [formik]);
    return (
        <div className='form-wrapprt my-auto'>
            <div className="w-full mx-auto mt-10 max-w-xs">
                <h1 className="text-2xl font-bold text-center ">
                    Welcome to {" "}
                    <span className='whitespace-nowrap text-2xl font-bold text-center text-amber-500'>
                        Hober Chat {" "}
                    </span>
                </h1>
                <h2 className="text-2xl text-center">
                    Sign In
                </h2>
                <form onSubmit={formik.handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-4 pt-3 pb-4 mb-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <MinimalInput defaultValue={formik.values.firstName} name="firstName" onChange={formik.handleChange} label="First Name" placeholder='First Name' id="grid-first-name" type="text" />
                        <MinimalInput defaultValue={formik.values.lastName} name="lastName" label='Last Name' onChange={formik.handleChange} id="grid-last-name" type="text" placeholder="Last Name" />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <MinimalInput defaultValue={formik.values.userName} name="userName" label='User Name' onChange={formik.handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="grid-last-name" htmlFor="username" type="text" placeholder="User Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                            Phone Number
                        </label>
                        <input name="phoneNumber" onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="number" placeholder="+98 " />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input name="email" onChange={formik.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input name="password" onChange={formik.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; 2022 <a href="https://hosseinhosseini.net/">
                        Seyed Hossein Hosseini. </a> All rights reserved.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state.auth, ...state.chat });
const mapDispatchToProps = (dispatch: any) => ({
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
