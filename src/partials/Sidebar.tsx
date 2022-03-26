import React, { useEffect, useState } from 'react'
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'
import '../assets/css/styles.css'
import { Button, Divider } from 'antd';
import '../assets/css/iMessage.css'
import MinimalInput from '../components/Input/MinimalTextInput';
import { SearchOutlined } from '@ant-design/icons';
import Search from './Search';
import MessageList from './MessageList';
import chat from '../store/reducers/chatReducer';

export function Sidebar({ ...props }: any) {

    console.log("props", props)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const searchUser = () => {
        if (props.socket) {
            props.socket.send(JSON.stringify({
                type: "SEARCH_USER",
                data: search
            }))
        }
    }
    useEffect(() => {
        if (search?.length > 2) {
            searchUser()
        } else {
            if (props.users[0])
                dispatch({
                    type: "NOT_GOT_USERS"
                });
        }
    }, [search])

    return (
        <div className='sidebar'>
            <div className='flex search-container'>
                <MinimalInput defaultValue={search} name='search-user' className='p-0 m-0 mt-2' onChange={(e: any) => { setSearch(e.target.value) }} placeholder="Search User" />
                <Button onClick={searchUser} type="primary" className='my-auto mx-1' shape="circle" icon={<SearchOutlined />} />
            </div>
            {search ? (
                <Search />
            ) : (
                <MessageList />
            )}
            {(0 < search.length) && (search.length < 3) && (
                <p className="text-center text-orange-500 text-xs italic">You must enter at least <b>3</b> letters</p>
            )}
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