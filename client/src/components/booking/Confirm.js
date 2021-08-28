import React from "react";

import { useSelector } from "react-redux";
import "../../styles/Confirm.scss";

const Confirm = () => {
  const confirmation = useSelector((state) => state.confirmation);

  return (
    <div className="Confirm">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/booking/confirm_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Enjoy Your Stay!</h2>
        </div>
      </header>
      <section className="desc">
        {confirmation && confirmation.confirmation ? (
          <>
            <h1 className="alt-font">Thank You!</h1>
            <div className="confirm">
              <h1>Your confirmation code is:</h1>
              <h1> {confirmation.confirmation}</h1>
              <div className="btn-container">
                <button className="btn contrast" onClick={() => window.print()}>
                  <i className="fas fa-print"></i> Print
                </button>
              </div>
            </div>
          </>
        ) : (
          <h1>Something went wrong...</h1>
        )}
      </section>
    </div>
  );
};

export default Confirm;
