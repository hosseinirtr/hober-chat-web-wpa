import { useEffect } from 'react';
import { connect, shallowEqual, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Login } from '../partials/Login';
import { Signup } from '../partials/Signup';
import * as ChatActions from '../store/actions/chatActions'
export function Auth(props: any) {
    const token = useSelector(
        ({ auth }: any) => auth.token,
        shallowEqual
    )
    // const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            console.log("Redirect to root");
            <Redirect to='/falseyRoute' />
            // navigate('/')
            // window.location.href = ("/")
        }
    }, [token])
    return (
        <div className='auth-wrapper w-full h-full'>
            {props.match.path === '/signup' ?
                <Signup />
                :
                <Login />
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state.auth, ...state.chat });
const mapDispatchToProps = (dispatch: any) => ({
    setupSocket: () => dispatch(ChatActions.setupSocket()),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Auth));