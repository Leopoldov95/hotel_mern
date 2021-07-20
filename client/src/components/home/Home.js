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
        <h1>Welcome to beautiful Thailand</h1>
        <p>
          Explore evrything Thailand has to offer while staying at our resort.
          From it's pristine white sand beaches, breathtaking nature, uniquie
          cuisine, and friendly locals, Thailand has someone special for
          everybody.
        </p>
      </section>
      <section className="resort">
        <article className="resortLeft">
          <div className="bg-light"></div>
          <h1>PHUKET IS CALLING</h1>
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
          <button className="btn">Discover More</button>
        </article>
        <div className="resortRight">
          <img src="/img/home/home_resort.jpg" alt="home_resort" />
        </div>
      </section>
    </div>
  );
};

export default Home;
