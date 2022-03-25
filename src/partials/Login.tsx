import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export function Login(props: any) {

    return (
        <div className='form-wrapprt my-auto'>
            <div className="w-full mx-auto mt-10 max-w-xs">

                <h1 className="text-2xl font-bold text-center ">
                    Welcome back to {" "}
                    <span className='whitespace-nowrap text-2xl font-bold text-center text-amber-500'>
                        Hober Chat {" "}
                    </span>
                </h1>
                <h2 className="text-2xl text-center">                    Login
                </h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Log In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
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

const mapStateToProps = (state: any) => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);