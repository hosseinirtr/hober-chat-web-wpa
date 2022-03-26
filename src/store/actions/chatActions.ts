import * as AuthActions from "./authActions";

export const setupSocket = () => {
  return (dispatch: any) => {
    const socket = new WebSocket(`ws://${window.location.hostname}:8080`); //dynamic hostname
    socket.onopen = () => {
      console.log("socket opened");
      console.log("socket:", socket);
      dispatch({
        type: "SETUP_SOCKET",
        payload: socket
      });
    };
    socket.onmessage = (message: any) => {
      let data = JSON.parse(message.data);
      switch (data.type) {
        case "LOGGEDIN":
          dispatch(AuthActions.loggedIn(data));
          break;
        case "GOT_USERS":
          dispatch({
            type: "GOT_USERS",
            payload: data.data.users
          });
          break;
        case "ADD_THREAD":
          dispatch({
            type: "ADD_THREAD",
            payload: data.data
          });
          break;
        case "NOT_GOT_USERS":
          dispatch({
            type: "NOT_GOT_USERS"
          });
          break;
        default:
        // do nothing
      }
    };
  };
};
