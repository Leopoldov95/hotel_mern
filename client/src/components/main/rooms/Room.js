import React, { useState } from "react";
import RoomsJSON from "../../../rooms.json";
import BookWidget from "../../booking/BookWidget";
import { displayIcon } from "./Icons";
import './Room.scss'
const Room = (props) => {
  const currId = props.match.params.id;
  const currRoom = RoomsJSON.find((room) => room.url === Number(currId));
  return (
    <div className="Room">
      <header
        style={{
          background:
            `no-repeat center/cover url("/img/rooms/${currRoom.mainImage}")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">{currRoom.title}</h2>
          <p>
            {currRoom.titleHeader}
          </p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">{currRoom.header}</h1>
        <p>{currRoom.subHeader}</p>
      </section>
      <section className='roomInfo'>
        <div className='infoLeft'>
          <div className='info'>
<         div>
            <h3>VIEW</h3>
            <p>{currRoom.view}</p>
          </div>
          <div>
            <h3>SIZE</h3>
            <p>{currRoom.size}</p>
          </div>
          <div>
            <h3>OCCUPANCY</h3>
            <p>{currRoom.adults} Adults & {currRoom.children} Children</p>
          </div>
          <div>
            <h3>BEDDING</h3>
            <p>{currRoom.bedding}</p>
          </div>
          </div>
          <div className='infoIcons'>
            <h3>AMENITIES</h3>
          <ul>
             {currRoom.amenities.map((item) => 
              <li>
                <i className={`${displayIcon(item)} itemIcon`}></i>
                <p>{item}</p>
              </li>
            )}
          </ul>
         
        </div>
        </div>
        
        <div className='infoRight'>
          <h2 className='alt-font'>ROOM OVERVIEW</h2>
          <p>{currRoom.paragraph}</p>
        </div>
      </section>
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">PHUKET IS CALLING</h1>
          <p>
            Welcome back to our oceanside resort, in the heart of Phuket's
            bustling, breathtaking city. Nestled between the dramatic peaks of
            Table Mountain and the roaring Atlantic Ocean, you’ll spend warm
            leisurely days by glistening pools or basked in relaxation at our
            spa, and balmy evenings sampling local flavours at our exquisite
            restaurants, Nobu, Vista Bar & Lounge and Isola. Let us show you
            another side to Phuket. Here&Now.
          </p>
          <h2>RESORT OPEN</h2>
          <button className="btn contrast">Discover More</button>
        </article>
        <div className="descRight">
          <img src={`/img/rooms/${currRoom.subImage}`} alt="sub_room" />
        </div>
      </section>
    </div>
  );
};

export default Room;
