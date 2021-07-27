import { FETCH_ROOMS, ROOM } from "../constants/actionTypes";
import * as api from "../api";

export const getAllRooms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRooms();
    dispatch({ type: FETCH_ROOMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getRoom = (url) => async (dispatch) => {
  try {
    const { data } = await api.fetchRoom(url);
    dispatch({ type: ROOM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
