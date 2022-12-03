export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
    //"BQCPO9PMRFUQGPhXdaZCGS1Xtm0DqoE6xlYFKfeUyWHBAoXVMnQq_QTFi8SGuN2Q5PBmPz8rh6mETfAz2Vix14oOhU2Fg2fRQz0YYM51lO9f6rOtAsg8gQFwS2lyKntJUO9UJbuxNCW88M_wTuSS2BJgQ1cMGtwjnxH1xLYOzuisj1JM5TD",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      //console.log(action.playlists);
      return {
        ...state, 
        playlists: action.playlists,
      };
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
      };

      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };

        case "SET_PLAYING":
          return {
            ...state,
            playing: action.playing,
          };

      case "SET_DISCOVER_WEEKLY": 
      return {
        ...state,
        discover_weekly : action.discover_weekly,
      }
      
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };

    default:
      return state;
  }
};

export default reducer;
