import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Login } from '../partials/Login';
import { Signup } from '../partials/Signup';

export function Auth(props: any) {
    return (
        // <div className='auth-wrapper'>Auth</div>
        <div className='auth-wrapper'>
            {props.match.path === '/signup' ?
                <Signup />
                :
                <Login />
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    ...state.auth
})
const mapDispatchToProps = (dispatch: any) => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Auth));