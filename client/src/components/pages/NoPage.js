import React from "react";
const About = () => {
  return (
    <div className="About">
      <header
        className="header-main"
        style={{
          background: ' no-repeat center/cover url("/img/404/404.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Page Not Found</h2>
        </div>
      </header>
      <section className="desc">
        <h2 style={{ minHeight: "50vh" }}>
          Sorry, the page you're looking for doesn't exist
        </h2>
      </section>
    </div>
  );
};

export default About;
