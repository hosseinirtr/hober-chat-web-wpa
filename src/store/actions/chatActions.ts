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
      console.log("message", message);
      let data = JSON.parse(message.data);
      console.log("data", data);
      switch (data.type) {
        case "LOGGEDIN":
          dispatch(AuthActions.loggedIn(data));
          break;
        default:
        // do nothing
      }
    };
  };
};
