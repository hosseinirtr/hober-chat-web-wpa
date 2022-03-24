const defaultState = {
  socket: null,
  messages: "",
  threads: "",
  currentThread: "",
  users: [],
  user: {},
  typing: false,
  typingUsers: [],
  typingUsersCount: 0,
  typingUsersString: "",
  typingUsersStringShort: "",
};
const chat = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SETUP_SOCKET":
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
};
export default chat;
