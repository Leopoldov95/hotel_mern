import React from "react";
import "../../styles/Tour.scss";
import BookWidget from "../booking/BookWidget";
const Tour = () => {
  return (
    <div className="Tour">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/tours/tour_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Tours & Activities</h2>
          <p>Explore all of our tours and activities here</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">View all of our tours</h1>
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
          <h1 className="alt-font">ICONIC SCENARY</h1>
          <p>
            This temple is one of the most beautiful that Thailand has to offer,
            the name Wat Benchamabophit means Marble Temple and came about from
            the white Carrara marble that was imported from Italy and used to
            construct the temple. The temple is made up of various small
            buildings rather than one central wihaan or chedi. You can see many
            European influences in the temple including the beautiful stained
            glass windows. The Current king of Thailand Bhumibol Adulyadej spent
            several days as monk here before his coronation.
          </p>
          <h2>DAILY VISITS</h2>
        </article>
        <div className="descRight">
          <img src="/img/tours/tour_main.jpg" alt="tour_main" />
        </div>
      </section>
      <section className="desc_sec">
        <div className="img-container">
          <img src="/img/tours/tour_market.jpg" alt="markets" />
        </div>
        <article>
          <span></span>
          <div>
            <h1 className="alt-font">Explore the local markets</h1>
            <p>
              From epic Table Mountain hikes and awe-inspiring adventures at
              sea, to enticing Winelands, Cape Town offers an array of immersive
              experiences and activities.
            </p>
          </div>
          <span></span>
        </article>
      </section>
      <section className="desc_gallery">
        <div className="descLeft">
          <h2 className="alt-font">Phi Phi Islands</h2>
          <div className="img-container">
            <img
              className="lg-img"
              src="/img/tours/tour_island.jpg"
              alt="island_tour"
            />
          </div>
        </div>
        <div className="descRight">
          <img src="/img/tours/tour_island_01.jpg" alt="island_tour_01" />
          <article>
            <h2 className="alt-font">Pristine Beaches and Blue Waters</h2>
            <p>
              You won’t be short on things to do as Koh Phi Phi has plenty of
              activities on offer, from diving, snorkelling, rock climbing and
              kayaking. For those who prefer to relax, there are several amazing
              spas that offer a range of pampering and revitalizing packages.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Tour;
