import React, { useState } from 'react'
import { connect, shallowEqual, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import '../assets/css/styles.css'
import '../assets/css/iMessage.css'
import { IUserIData } from '../functions/Interface/IUserIData';
import { findOrCreateThread } from '../functions/Functions';
import { Empty } from 'antd';

function Search(props: any) {

    console.log("props", props)
    return (
        <div>
            <label id="messages-label">Search</label>
            <ul className='thread-list divide-y'>
                {props.users.filter((u: any) => u.id !== props.user.id).map((user: IUserIData, id: number) => (
                    <li key={id} id={`chat-list-id#${user.id}`} >
                        <a onClick={() => { findOrCreateThread(props.user.id, user.id, props.socket) }}>
                            <i className='zmdi zmdi-account-circle my-1 mx-4' />
                            <h5 className='contact-name'>{user.firstName + " " + user.lastName} </h5>
                            <p className='contact-message'>{user.userName}</p>
                        </a>
                    </li>
                ))}
            </ul>
            {(!!props.users[0] === false) && (
                <div className='flex flex-col items-center'>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                            height: 60,
                        }}
                        description={
                            <span>
                                Not Found
                            </span>
                        }
                    />
                    <p className="text-center mt-2 text-orange-500 text-xs italic">Sensitive to the type of letters</p>
                </div>
            )
            }
        </div >
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
)(withRouter(Search))