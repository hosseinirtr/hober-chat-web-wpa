import React, { useEffect } from 'react';
import { BrowserRouter, Router, Link, Route, Routes, } from 'react-router-dom';
import Login from './component/partials/Login';
import { connect } from 'react-redux';
import * as ChatActions from './store/actions/chatActions';

function App(props: any) {
  useEffect(() => {
    console.log('App component rendered');
    props.setupSocket()
  }, [])
  return (
    <div className="App">
      <p>
        page one
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/login"
            element={<Login />}
          />
          <Route path="/"
            // component={Login}
            element={(
              <p>
                Root
              </p>
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
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
