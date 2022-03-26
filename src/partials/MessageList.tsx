import React, { useState } from 'react'
import { connect, shallowEqual, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import '../assets/css/styles.css'
import '../assets/css/iMessage.css'
import { findOrCreateThread } from '../functions/Functions';

function Sidebar(props: any) {
    console.log(props,)
    console.log(props.threads,)
    return (
        <div>
            <label id="messages-label">Messages</label>
            <ul className='thread-list divide-y'>
                {!!props.threads[0] && props.threads.map((thread: any, threadIndex: number) => (
                    <li id='chat-list-id#id' key={threadIndex} onClick={() => { findOrCreateThread(props.user.id, "kjdfkgblj234h23jnj", props.socket) }}>
                        <Link to={"/thread"}>
                            <i className='zmdi zmdi-account-circle my-1 mx-4' />
                            <h5 className='contact-name'>{thread.id}</h5>
                            <p className='contact-message'>this is the last message thread</p>
                        </Link>
                    </li>
                ))}
                <li id='chat-list-id#id'>
                    <Link to={"/thread"}>
                        <i className='zmdi zmdi-account-circle my-1 mx-4' />
                        <h5 className='contact-name'>Name</h5>
                        <p className='contact-message'>this is the last message</p>
                    </Link>
                </li>
                <li id='chat-list-id#id'>
                    <Link to={"/thread"}>
                        <i className='zmdi zmdi-account-circle my-1 mx-4' />
                        <h5 className='contact-name'>Name</h5>
                        <p className='contact-message'>this is the last message</p>
                    </Link>
                </li>
                <li id='chat-list-id#id'>
                    <Link to={"/thread"}>
                        <i className='zmdi zmdi-account-circle my-1 mx-4' />
                        <h5 className='contact-name'>Name</h5>
                        <p className='contact-message'>this is the last message</p>
                    </Link>
                </li>
                <li id='chat-list-id#id'>
                    <Link to={"/thread"}>
                        <i className='zmdi zmdi-account-circle my-1 mx-4' />
                        <h5 className='contact-name'>Name</h5>
                        <p className='contact-message'>this is the last message</p>
                    </Link>
                </li>


            </ul>
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
)(withRouter(Sidebar))