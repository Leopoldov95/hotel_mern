import React, { useState } from "react";
import RoomsJSON from "../../../rooms.json";
const Room = (props) => {
  const currId = props.match.params.id;
  const currRoom = RoomsJSON.find((room) => room.url === Number(currId));
  console.log(currRoom);
  console.log(currId);
  return (
    <div className="Room">
      <h1>Welcome to the indivual room!!!</h1>
    </div>
  );
};

export default Room;
