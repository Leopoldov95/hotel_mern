import { FETCH_ROOMS, ROOM } from "../constants/actionTypes";

const roomReducer = (
  state = {
    rooms: [],
    room: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return { ...state, rooms: action.payload };
    case ROOM:
      return { ...state, room: action.payload };
    default:
      return state;
  }
};

export default roomReducer;
