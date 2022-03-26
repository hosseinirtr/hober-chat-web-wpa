import React, { useEffect, useState } from 'react'
import { connect, shallowEqual, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { checkMobile } from '../functions/Functions';
import Sidebar from '../partials/Sidebar';
import ThreedView from '../partials/ThreedView';
import Test from './test';

function Messenger(props: any) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("isMobile")) {
            let data = localStorage.getItem("isMobile")
            data === "true" ? setIsMobile(true) : setIsMobile(false)
        } else {
            const mobile = checkMobile()
            setIsMobile(mobile)
            localStorage.setItem("isMobile", mobile ? "true" : "false")
        }
    }, [])

    useEffect(() => {
        const scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }, [])

    return (
        <div className='messenget-container flex justify-between'>
            <Sidebar />
            <ThreedView />
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
)(withRouter(Messenger))