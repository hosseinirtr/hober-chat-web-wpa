export const loggedIn = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "LOGGEDIN",
      payload: data
    });
  };
};
export const logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: "LOGGEDOUT",
      payload: null
    });
  };
};
