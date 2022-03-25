export const setupSocket = () => {
  return (dispatch: any) => {
    const socket = new WebSocket(`ws://${window.location.hostname}:8080`); //dynamic hostname
    socket.onopen = () => {
      console.log("socket:", socket);
      console.log("socket opened");
      dispatch({
        type: "SETUP_SOCKET",
        payload: socket
      });
    };
  };
};
