export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCPO9PMRFUQGPhXdaZCGS1Xtm0DqoE6xlYFKfeUyWHBAoXVMnQq_QTFi8SGuN2Q5PBmPz8rh6mETfAz2Vix14oOhU2Fg2fRQz0YYM51lO9f6rOtAsg8gQFwS2lyKntJUO9UJbuxNCW88M_wTuSS2BJgQ1cMGtwjnxH1xLYOzuisj1JM5TD",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
