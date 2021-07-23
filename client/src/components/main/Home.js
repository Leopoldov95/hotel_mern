import React from "react";
import BookWidget from "../booking/BookWidget";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <header
        style={{
          background: ' no-repeat center/cover url("/img/home/home.jpg")',
        }}
      >
        <BookWidget />
      </header>

      <section className="desc">
        <h1 className="alt-font">Welcome to beautiful Thailand</h1>
        <p>
          Explore evrything Thailand has to offer while staying at our resort.
          From it's pristine white sand beaches, breathtaking nature, uniquie
          cuisine, and friendly locals, Thailand has someone special for
          everybody.
        </p>
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
          <img src="/img/home/home_resort.jpg" alt="home_resort" />
        </div>
      </section>
      <section className="spotlight">
        <h1 className="alt-font">Spotlight</h1>
        <div className="card-row">
          <div className="card">
            <div>
              <img src="/img/home/home_food.jpg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Delicious Cuisine</h2>
              <p>
                The essence of Thai food is all about balance – achieving the
                perfect harmony between sweet, sour, hot and salty. Pungent
                fresh herbs, such as lemongrass and galangal, tone down
                overpowering spices, while salty sauces are tempered with sugars
                and offset by acids, such as lemon and lime.
              </p>
              <button className="btn contrast">Discover More</button>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/img/home/home_room.jpg" alt="home_room" />
            </div>
            <article>
              <h2 className="alt-font">Luxury Rooms</h2>
              <p>
                Luxury room features: High-quality furnishings with opulent,
                expensive touches, attention to aesthetic detail, a quiet room
                with fresh air, original art on the walls, windows that open,
                robes and slippers, adequate storage, hangers, desk, reading
                chair, safe, good-size flat-screen TV, iPhone/iPod dock, coffee
                maker, full-length mirror, effective heating/AC system…And of
                course a King bed with a good mattress, high-quality sheets and
                a variety of pillow types (or a pillow menu)!
              </p>
              <button className="btn contrast">Discover More</button>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/img/home/home_tour.jpg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Amazing Tours</h2>
              <p>
                The essence of Thai food is all about balance – achieving the
                perfect harmony between sweet, sour, hot and salty. Pungent
                fresh herbs, such as lemongrass and galangal, tone down
                overpowering spices, while salty sauces are tempered with sugars
                and offset by acids, such as lemon and lime.
              </p>
              <button className="btn contrast">Discover More</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
