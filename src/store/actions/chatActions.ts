export const setupSocket = () => {
  return (dispatch: any) => {
    const socket = new WebSocket(`ws://${window.location.hostname}:8080`);
    socket.onopen = () => {
      console.log("socket opened");
      dispatch({
        type: "SETUP_SOCKET",
        payload: socket,
      });
    };
  };
};
