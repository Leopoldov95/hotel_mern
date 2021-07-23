import React from "react";
import "./Rooms.scss";
import { Link } from "react-router-dom";
import BookWidget from "../../booking/BookWidget";
import RoomsJSON from "../../../rooms.json";
const Rooms = () => {
  return (
    <div className="Rooms">
      <header
        style={{
          background:
            ' no-repeat center/cover url("/img/rooms/room_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Rooms</h2>
          <p>
            Our generous guest rooms at Suay Resort boast breathtaking views and
            exclusive amenities
          </p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">Be Captivated</h1>
        <p>
          Choose between spectacular balcony views of The Villa or our resort’s
          private Beach Resort and Oceanside View, from the largest hotel rooms
          in Phuket.
        </p>
      </section>
      <section className="flex-row-lg">
        {RoomsJSON.map((room) => (
          <article className="card" key={room.title}>
            <Link to={`rooms/${room.url}`}>
              <button className="btn-alt ">EXPLORE</button>
            </Link>
            <div>
              <h1 className="alt-font">{room.title}</h1>
              <p>{room.description}</p>
            </div>
            <div className="img-container">
              <img src={`img/rooms/${room.mainImage}`} alt={room.mainImage} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Rooms;
