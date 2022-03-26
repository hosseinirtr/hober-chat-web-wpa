import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from './store/actions/authActions';
import * as ChatActions from './store/actions/chatActions';
import Auth from './pages/Auth';
import Messenger from './pages/Messenger';
function App(props: any) {
  useEffect(() => {
    console.log('App component rendered');
    props.setupSocket()
  }, [])

  // const sendData = (e: any) => {
  //   e.preventDefault();
  //   console.log(props, props.socket);
  //   props.socket.send(JSON.stringify({
  //     type: "Hello",
  //     data: "World"
  //   }))
  // }
  return (
    <div className="App w-full h-full">
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.logout}> Logout </button> */}
      <Router>
        <Switch>
          <Route path="/login"
            component={Auth}
          />
          <Route path="/signup"
            component={Auth}
          />
          <Route path="/:threadId"
            render={(e: any) => {
              if (!props.token) {
                return <Redirect to="/login" />
              } else {
                return <Messenger />
              }
            }}
          />
          <Route path="/"
            render={(e: any) => {
              if (!props.token) {
                return <Redirect to="/login" />
              } else {
                return <Messenger />
              }
            }}
          />
          {console.log("props.logout", props.logout)}
          <Route path={'/logout'} render={() => {
            props.logout()
            return <Redirect to="/login" />
          }} />
        </Switch>
        {/* <div className='text-center'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={e => { sendData(e) }}>Test It</button>
        </div> */}
      </Router>
    </div>
  );
}
const mapStateToProps = (state: any) => ({ ...state.auth, ...state.chat });
const mapDispatchToProps = (dispatch: any) => ({
  setupSocket: () => { dispatch(ChatActions.setupSocket()) },
  logout: () => { dispatch(AuthActions.logout()) }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
