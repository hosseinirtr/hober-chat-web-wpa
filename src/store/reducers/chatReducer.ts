const defaultState = {
  socket: null,
  messages: "",
  threads: [],
  currentThread: "",
  users: [],
  typing: false,
  typingUsers: [],
  typingUsersCount: 0,
  typingUsersString: "",
  typingUsersStringShort: "",
  findOrCreateThread: ""
};
const chat = (state = defaultState, action: any) => {
  console.log("chatReducer:", action, action.payload);
  switch (action.type) {
    case "SETUP_SOCKET":
      return {
        ...state,
        socket: action.payload
      };
    case "GOT_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "NOT_GOT_USERS":
      return {
        ...state,
        users: []
      };
    case "ADD_THREAD":
      console.log(action.payload);
      console.log(state.threads);
      return {
        ...state,
        threads: state.threads.concat(action.payload)
      };
    default:
      return state;
  }
};

export default chat;
