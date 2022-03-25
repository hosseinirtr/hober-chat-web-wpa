import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ChatActions from './store/actions/chatActions';
import Auth from './pages/Auth';
import { Switch } from 'react-router-dom';
function App(props: any) {
  useEffect(() => {
    console.log('App component rendered');
    props.setupSocket()
  }, [])

  const sendData = (e: any) => {
    e.preventDefault();
    console.log(props, props.socket);
    props.socket.send(JSON.stringify({
      type: "Hello",
      data: "World"
    }))
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login"
            component={Auth}
          />
          <Route path="/signup"
            component={Auth}
          />
          <Route path="/"
            render={(props: any) => {
              if (!props.token) {
                return <Redirect to="/login" />
              } else {
                return <p>root</p>
              }
            }}
          />
        </Switch>
        <div className='text-center'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={e => { sendData(e) }}>Test It</button>
        </div>
      </div>
    </Router>
  );
}
const mapStateToProps = (state: any) => ({ ...state.auth, ...state.chat });
const mapDispatchToProps = (dispatch: any) => ({
  setupSocket: () => dispatch(ChatActions.setupSocket()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
